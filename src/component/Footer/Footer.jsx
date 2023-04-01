import React from 'react';

const Footer = () => {
    return (
        <div className='mt-4'>
            <h3>Difference between props and state?</h3>
            <p>Difference between props and state is that props are passed down from a parent component to a child component and are immutable, whereas state is managed within a component and can be changed over time.</p>

            <h3>How does useState work?</h3>
            <p>useState is a React hook that allows functional components in React to manage state. It provides a way to store and update state in a component without using class components and the this.setState method. <br /> useState is a simple and powerful tool that allows React components to manage state without relying on class components and the this.setState method.</p>

            <h3>Purpose of useEffect other than fetching data?</h3>
            <p>useEffect is a versatile tool that can be used for many purposes beyond fetching data. It allows you to manage side effects in your component in a clean and declarative way. <br />1. Updating the document title: You can use useEffect to update the title of the document, based on the state of the component. <br /> 2. Setting up event listeners: You can use useEffect to set up event listeners, such as a resize listener on the window. <br /> 3. Managing timers and intervals: You can use useEffect to manage timers and intervals, such as a timer that updates the state of the component every second.</p>

            <h3>How Does React work?</h3>
            <p className='mb-5'>React is a JavaScript library for building user interfaces. It was created by Facebook and is widely used in web development. React works by allowing developers to create reusable UI components that can be composed to build complex user interfaces. <br /> React's combination of reusable components, virtual DOM, unidirectional data flow, and JSX make it a powerful tool for building fast and scalable user interfaces.</p>
        </div>
    );
};

export default Footer;