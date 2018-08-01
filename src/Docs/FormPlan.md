### Classes component:
- Bring currently selected subject in through container component
- Use getDerivedStateFromProps to make API call to UMD io using given subject prop
  - if nextProps.subject === prevState.subject then do nothing
  - else fetch data from API and update state
- onChange, the current class should be brought up the container component and passed down to the sections component

### Container component:
- controls state for all forms going on 
  - current subject
  - subjects
  - current class
  - classes
  - sections
- controls handlers for all forms 
  - onSubjectChange
  - onClassChange
  - onClickSection
- Renders forms selectively based on state
  - ex: if current subject is empty, the class for will not render, etc.

### Subjects component:
- make API call on componentDidMount() to get data and put into state

### Sections component:
- bring currently selected class in through container
- use getDerivedStateFromProps to make API call 
- 

I think that in order to really write this properly I'm going to have to use the api from the get go it just doesn't feel like I'm going to be able to properly impliment the features I want without it. The refactoring that I'm going to have to do later really won't be worth it, I might as well just get it over with now. 

## Secondary Plan

### Container component
- 

### Search Component
- Search component is linked up to 

### Class List Component
- state contains currently selected class and a list of all classes
- in componentDidMount() fetch classes from UMD.io
- in componentnDidUpdate() to update list of classes based on search bar + filters
- render list of classes w/ class number, name
