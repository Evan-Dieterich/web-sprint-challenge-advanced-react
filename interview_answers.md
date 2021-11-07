# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

 functional component is just a plain JavaScript function that accepts props as an argument and returns a React element. A class component requires you to extend from React. We also use the React lifecylce methods within stateful components.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount is called after the initial render and before the data is displayed, componentWillUpdate is called right before the component renders and right after chouldComponentUpdate.

3. Define stateful logic.

Stateful logic is any code that uses state or attempts to alter state.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange - initializes objects and sets the value of the data that is passed to the method under test.

Act - invokes the method under test with the arranged parameters.

Assert - verifies that the action of the method under test behaves as expected.
