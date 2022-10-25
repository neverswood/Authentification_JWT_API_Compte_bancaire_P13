import './HeaderUserPage.scss';

import { Button } from '../../../component/Button/Button';

export function HeaderUserPage({ name }: { name: any }) {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {name}
      </h1>
      <Button classButton="edit-button" text="Edit Name" />
    </div>
  );
}
