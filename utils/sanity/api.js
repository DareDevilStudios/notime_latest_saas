// api.js

import { client } from "@/sanity/lib/client";

export const getCourseData = async () => {
  // GROQ query to fetch course data
  const groqQuery = `
    *[_type == "course"] {
      courseName,
      numberOfLessons,
      duration,
      level,
      rating,
      image,
      author,
      price
    }
  `;

  try {
    // Fetch data from Sanity using the GROQ query
    const data = await client.fetch(groqQuery);

    console.log("data fetched", data)
    
    return data;
  } catch (error) {
    console.error('Error fetching course data:', error);
    return null;
  }
};
