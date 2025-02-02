# React App with MUI Table and Redux Setup

## 1. Async/Await Function to Fetch Data from JSON Placeholder API

To fetch data from the JSON Placeholder API, we use an `async` function inside the `useEffect` hook. This function makes an API call using `fetch`, retrieves the JSON data, and updates the state using `useState`. This ensures that the data is loaded when the component mounts.

---

## 2. Displaying Data in a MUI Table (Responsive for Laptop and Mobile)

The fetched data is displayed in a **Material UI (MUI) Table**. The table is responsive:
- On **laptop screens**, it takes up **half of the screen width**.
- On **mobile screens**, it takes up **full screen width**.

This is achieved using **Tailwind CSS** classes such as `md:max-w-[760px]` for medium screens and `max-w-[620px]` for mobile responsiveness. The table structure includes headers for `UserId`, `Id`, `Title`, and `Completed`, with a ✅ or ❌ indicator for completion status.

---

## 3. How to Pass the Redux Store to a React Page

I don't know Redux yet, but I will learn it soon. However, the basic concept involves:
- Creating a **Redux store** and defining a **reducer**.
- Wrapping the **React app** inside a `Provider` from `react-redux`, which passes the store to all components.
- Using `useSelector` to access state and `useDispatch` to trigger actions inside components.

Once I learn Redux, I will explore how to properly manage global state using this approach.

---

## 4. Prompt for Displaying the Table in a Mind Map Format

>"Create a React.js component that visualizes data in a mind map format. The data comes from an API (https://jsonplaceholder.typicode.com/todos) and contains userId, id, title, and completed fields."

