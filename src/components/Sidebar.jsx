import { ListboxWrapper } from './ListBoxWrapper';
import { Listbox, ListboxItem } from '@nextui-org/react';

export default function Sidebar() {
  return (
    <section className="w-1/4 mx-auto">
      <ListboxWrapper>
        <Listbox aria-label="Actions" onAction={() => alert('Oke kepencet')}>
          <ListboxItem key="home">Home</ListboxItem>
          <ListboxItem key="movies">Movies</ListboxItem>
          <ListboxItem key="genres">Genres</ListboxItem>
          <ListboxItem key="add">Add Movie</ListboxItem>
          <ListboxItem key="manage">Manage Catalogue</ListboxItem>
          <ListboxItem key="graphql">GraphQL</ListboxItem>
        </Listbox>
      </ListboxWrapper>
    </section>
  );
}
