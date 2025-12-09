import { useState, useEffect } from 'react';

const VISITOR_COUNT_KEY = 'shravan-portfolio-visitors';
const COUNT_API_NAMESPACE = 'shravan-portfolio';
const COUNT_API_KEY = 'visitor-count';

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
        
        // Try CountAPI first
        try {
          if (!hasVisited) {
            // Increment the count (this will create the key if it doesn't exist)
            const incrementResponse = await fetch(
              `https://api.countapi.xyz/hit/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}`,
              {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                },
              }
            );
            
            if (incrementResponse.ok) {
              const incrementData = await incrementResponse.json();
              if (incrementData && incrementData.value !== undefined) {
                setVisitorCount(incrementData.value);
                sessionStorage.setItem('hasVisited', 'true');
                localStorage.setItem(VISITOR_COUNT_KEY, incrementData.value.toString());
                setLoading(false);
                return;
              }
            }
          } else {
            // Just get the current count without incrementing
            const getResponse = await fetch(
              `https://api.countapi.xyz/get/${COUNT_API_NAMESPACE}/${COUNT_API_KEY}`,
              {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                },
              }
            );
            
            if (getResponse.ok) {
              const getData = await getResponse.json();
              if (getData && getData.value !== undefined) {
                setVisitorCount(getData.value);
                setLoading(false);
                return;
              }
            }
          }
        } catch (apiError) {
          console.warn('CountAPI error, using fallback:', apiError);
        }

        // Fallback: Use localStorage
        const localCount = localStorage.getItem(VISITOR_COUNT_KEY);
        if (localCount) {
          const count = parseInt(localCount, 10);
          if (!isNaN(count)) {
            if (!hasVisited) {
              // Increment local count
              const newCount = count + 1;
              localStorage.setItem(VISITOR_COUNT_KEY, newCount.toString());
              setVisitorCount(newCount);
              sessionStorage.setItem('hasVisited', 'true');
            } else {
              setVisitorCount(count);
            }
            setLoading(false);
            return;
          }
        }

        // If no local count exists, start with 1
        if (!hasVisited) {
          localStorage.setItem(VISITOR_COUNT_KEY, '1');
          sessionStorage.setItem('hasVisited', 'true');
          setVisitorCount(1);
        } else {
          setVisitorCount(1);
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        // Final fallback
        const localCount = localStorage.getItem(VISITOR_COUNT_KEY);
        if (localCount) {
          setVisitorCount(parseInt(localCount, 10));
        } else {
          setVisitorCount(1);
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
