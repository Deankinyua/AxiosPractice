import { Button, ButtonGroup, Divider, Spinner, list } from '@chakra-ui/react';
import './App.css';
import UserService, { Users } from './Services/User-service';
import UseUsers from './Hooks/UseUsers';

function App() {
  const { users, error, isLoading, setError, setUsers } = UseUsers();

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { name: 'Dean Kinyua', id: 11 };
    setUsers([...users, newUser]);
    const response = UserService.postEntity(newUser);
    response.catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const updateUser = (user: Users) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + '!' };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    const response = UserService.putEntity(updatedUser);
    response.catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const deleteUser = (user: Users) => {
    const originalUsers = [...users];
    const newUsers = users.filter((u) => u.id !== user.id);
    setUsers(newUsers);
    const response = UserService.deleteEntity(user.id);
    response.catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {' '}
      {error && <p>{error}</p>}
      {isLoading && <Spinner />}
      <ButtonGroup spacing={2} marginBottom={6}>
        <Button onClick={addUser} colorScheme="blue">
          Add User
        </Button>
      </ButtonGroup>{' '}
      {/* <p>Mosh Hamedani</p> */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div className="user-div">
              <div>{user.name}</div>
              <div>
                <ButtonGroup spacing={5} marginBottom={6}>
                  <Button
                    colorScheme="green"
                    variant="outline"
                    onClick={() => updateUser(user)}
                  >
                    Update
                  </Button>
                  <Button colorScheme="red" onClick={() => deleteUser(user)}>
                    Delete
                  </Button>
                </ButtonGroup>
              </div>
            </div>{' '}
            <Divider px={3} />
          </li>
        ))}
      </ul>
      <div></div>
    </>
  );
}

export default App;
