import './HeaderUserPage.scss';
import { Button } from '../../../component/Button/Button';
import { useState } from 'react';
import { Input } from '../../../component/Input/Input';
import { setProfile } from '../../../features/UserSlice';
import { useDispatch } from 'react-redux';
import { putProfile } from '../../../service/UserService';

type UserPageProps = {
  firstName: string;
  lastName: string;
  token: string;
};

export function HeaderUserPage({ token, firstName, lastName }: UserPageProps) {
  const dispatch = useDispatch();

  const [retrieveFirstName, setRetrieveFirstName] = useState('');
  const [retrieveLastName, setRetrieveLastName] = useState('');
  const [isShown, setIsShown] = useState(true);
  localStorage.setItem('firstName', firstName as string);
  localStorage.setItem('lastName', lastName as string);

  const editName = () => {
    setIsShown((current) => !current);
  };

  const saveEventButton = async () => {
    const data = await putProfile(token, retrieveFirstName, retrieveLastName);
    dispatch(
      setProfile({ firstName: data.firstName, lastName: data.lastName })
    );
    localStorage.setItem('firstName', retrieveFirstName as string);
    localStorage.setItem('lastName', retrieveLastName as string);

    setIsShown((current) => !current);
  };

  const cancelEventButton = () => {
    setIsShown((current) => !current);
  };

  return (
    <div className="header">
      <div style={{ display: isShown ? 'none' : 'block' }}>
        <h1>Edit your name</h1>
        <div className="edit-name-inputs">
          <Input
            inputName="edit-name-input input-wrapper"
            labelFor="firstName"
            labelText="FirstName"
            type="firstName"
            id="firstName"
            value={retrieveFirstName}
            onChange={(e) => setRetrieveFirstName(e.target.value)}
          />
          <Input
            inputName="edit-name-input input-wrapper"
            labelFor="lastName"
            labelText="LastName"
            type="lastName"
            id="lastName"
            value={retrieveLastName}
            onChange={(e) => setRetrieveLastName(e.target.value)}
          />
        </div>
        <div className="edit-name-change">
          <Button
            classButton="btn edit-name-change__save"
            click={saveEventButton}
          >
            save
          </Button>
          <Button
            classButton="btn edit-name-change__cancel"
            click={cancelEventButton}
          >
            cancel
          </Button>
        </div>
      </div>
      <div style={{ display: isShown ? 'block' : 'none' }}>
        <h1>
          Welcome back
          <br />
          {firstName} {lastName}
        </h1>
        <Button classButton="btn edit" click={editName}>
          Edit Name
        </Button>
      </div>
    </div>
  );
}
