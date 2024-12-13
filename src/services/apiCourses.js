const storedData = JSON.parse(localStorage.getItem("userData"));
const token = storedData?.token;

export const getEnrolledCourses = async () => {
  console.log(token);
  try {
    const response = await fetch(
      "https://illusion-6ga5.onrender.com/api/courses/enrolled",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.ok) {
      const responseData = await response.json();

      return responseData;
    } else {
      throw new Error();
    }
  } catch (err) {
    return err.message;
  }
};

export const getAllCourses = async () => {
  try {
    const response = await fetch(
      "https://illusion-6ga5.onrender.com/api/courses/",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);

      return responseData;
    } else {
      throw new Error();
    }
  } catch (err) {
    return err.message;
  }
};

export const getCreatedCourses = async () => {
  try {
    const response = await fetch(
      "https://illusion-6ga5.onrender.com/api/courses/created/",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.ok) {
      const responseData = await response.json();

      return responseData;
    } else {
      throw new Error();
    }
  } catch (err) {
    return err.message;
  }
};

export const buyCourse = async () => {
  try {
    const response = await fetch(
      "https://illusion-6ga5.onrender.com/api/courses/created/",
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.ok) {
      const responseData = await response.json();

      return responseData;
    } else {
      throw new Error();
    }
  } catch (err) {
    return err.message;
  }
};
