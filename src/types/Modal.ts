export interface ModalButton {
  label: string;
  action: () => void;
  isPrimary: boolean;
}

export interface ModalContent {
  title: string;
  message: string;
  buttons: ModalButton[];
}
