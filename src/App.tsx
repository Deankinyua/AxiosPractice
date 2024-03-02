import { Button, ButtonGroup, Divider } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <>
      <ButtonGroup spacing={2} marginBottom={6}>
        <Button colorScheme="blue">Add User</Button>
      </ButtonGroup>
      <div className="user-div">
        <p>Mosh Hamedani</p>
        <div>
          <ButtonGroup spacing={5} marginBottom={6}>
            <Button colorScheme="green" variant="outline">
              Update
            </Button>
            <Button colorScheme="red">Delete</Button>
          </ButtonGroup>
        </div>
      </div>
      <Divider />
    </>
  );
}

export default App;
