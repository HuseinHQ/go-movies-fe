import { Component } from 'react';
import Sidebar from '../components/Sidebar';

export default function PageWrapper({ Children }) {
  return (
    <main className="container max-w-screen-xl mx-auto flex">
      <Sidebar />
      <Children />
    </main>
  );
}

PageWrapper.propTypes = {
  Children: Component,
};
