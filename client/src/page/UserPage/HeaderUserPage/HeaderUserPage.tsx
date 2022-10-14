import './HeaderUserPage.scss';

import { Button } from '../../../component/Button/Button';

export function HeaderUserPage() {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <Button classButton="edit-button" text="Edit Name" />
    </div>
  );
}
