export interface UserInput {
  id: string;
  title: string;
  text: string;
  createdAt: string;
  isDone: boolean;
}

export interface Todos extends UserInput {}

export interface InputProps {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

export interface TodoContainerProps {
  setClicked: React.Dispatch<React.SetStateAction<Todos | undefined>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ListProps {
  setClicked: React.Dispatch<React.SetStateAction<Todos | undefined>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
}

export interface ModalProps {
  clicked: Todos | undefined;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
