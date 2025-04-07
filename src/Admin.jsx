import React, { useState, useEffect } from 'react';
import F1 from './card';
import app from './firebase.js';
import { getDatabase, ref, get } from 'firebase/database';

function Admin() {
  const [feedbacklist, setfeedbacklist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase(app);
      const dbRef = ref(db, "feedback/users");

      try {
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const feedbackArray = Object.entries(data).map(([id, value]) => ({
            id,
            ...value,
          }));
          setfeedbacklist(feedbackArray);
        } else {
          setfeedbacklist([]);
        }
      } catch (error) {
        console.error("Error fetching feedback:", error);
        setfeedbacklist([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex-grow p-4 min-h-[calc(100vh-64px-64px)]">
      {/* Adjust 64px if your header/footer height differs */}
      <h1 className="text-2xl font-bold mb-4 text-center">User Feedbacks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <p className="text-gray-600 text-lg">Loading feedbacks...</p>
        ) : feedbacklist.length === 0 ? (
          <p className="text-gray-700 text-lg">No feedbacks yet.</p>
        ) : (
          feedbacklist.map((feedback) => (
            <F1
              key={feedback.id}
              name={feedback.name}
              email={feedback.email}
              message={feedback.feedback}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Admin;
