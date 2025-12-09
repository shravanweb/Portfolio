import { useState, useEffect } from 'react';

const VISITOR_COUNT_KEY = 'shravan-portfolio-visitors';

/**
 * Custom hook to fetch and display visitor count
 * Uses CountAPI (free service) to track total visitors
 */
const useVisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        // Check if user has already visited in this session
        const hasVisited = sessionStorage.getItem('hasVisited');
        
        // Use CountAPI to get and increment visitor count
        const namespace = 'shravan-portfolio';
        const key = 'visitor-count';
        
        if (!hasVisited) {
          // Increment the count (this will create the key if it doesn't exist)
          const incrementResponse = await fetch(
            `https://api.countapi.xyz/hit/${namespace}/${key}`
          );
          
          if (incrementResponse.ok) {
            const incrementData = await incrementResponse.json();
            setVisitorCount(incrementData.value);
            sessionStorage.setItem('hasVisited', 'true');
          }
        } else {
          // Just get the current count without incrementing
          const getResponse = await fetch(
            `https://api.countapi.xyz/get/${namespace}/${key}`
          );
          
          if (getResponse.ok) {
            const getData = await getResponse.json();
            setVisitorCount(getData.value || 0);
          }
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        // Fallback: try to get from localStorage
        const localCount = localStorage.getItem(VISITOR_COUNT_KEY);
        if (localCount) {
          setVisitorCount(parseInt(localCount, 10));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  return { visitorCount, loading };
};

export default useVisitorCount;

