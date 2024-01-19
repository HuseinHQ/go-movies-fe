import { Button } from '@nextui-org/react';

export default function Navbar() {
  return (
    <>
      <header className="flex max-w-screen-xl mx-auto justify-between my-3">
        <h1 className="font-bold text-2xl">Go Watch a Movie!</h1>
        <div>
          <Button size="sm" color="primary">
            Login
          </Button>
        </div>
      </header>
      <hr className="max-w-screen-xl mx-auto" />
    </>
  );
}
