import IconComponent from "@/components/icon/IconComponent";
import BotonBlue from "@/components/ui/buttonBlue";
import { ModalContent, ModalButton } from "@/types/Modal";

interface ModalComponentProps extends ModalContent {
  onClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  title,
  message,
  buttons,
  onClose,
}) => {
  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("modal-background")) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={handleOutsideClick}>
      <div className="absolute inset-0 bg-tertiary-purple bg-opacity-80 modal-background"></div>
      <div className="relative max-w-lg p-5 bg-white shadow-lg w-80 md:w-96 lg:w-full font-primary rounded-3xl">
        <div className="flex justify-center">
          <IconComponent />
        </div>
        <h2 className="mb-2 text-2xl font-bold text-center text-secondary-blue md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mb-5 text-lg text-center text-primary-celeste md:text-xl lg:text-2xl">
          {message}
        </p>
        <div className="flex justify-center gap-4">
          {buttons.map((button: ModalButton, index: number) => (
            <BotonBlue
              key={index}
              text={button.label}
              isActive={button.isPrimary}
              onClick={() => {
                onClose();
                setTimeout(button.action, 300);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
