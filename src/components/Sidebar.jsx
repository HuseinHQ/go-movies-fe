import { ListboxWrapper } from './ListBoxWrapper';
import { Listbox, ListboxItem } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <section className="w-1/4 mx-auto">
      <ListboxWrapper>
        <Listbox aria-label="Actions" onAction={(key) => navigate(`/${key}`)}>
          <ListboxItem key="">Home</ListboxItem>
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
