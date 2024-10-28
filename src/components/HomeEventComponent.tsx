import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface HijoProps {
  title: string;
  text: string;
  button: string;
  admin: boolean;
  member: boolean;
}

const HomeEventComponent: React.FC<HijoProps> = ({
  title,
  text,
  button,
  admin,
  member,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/trip-component");
  };

  return (
    <div className="h-40 flex flex-col items-center justify-center bg-primary-blue rounded-2xl">
      <div className="p-5 text-center">
        {admin ? (
          <h1 className="text-2xl font-bold text-white font-primary">
            {title}
          </h1>
        ) : (
          <div>
            {member ? (
              <h1 className="text-2xl font-bold text-white font-primary">
                {title}
              </h1>
            ) : (
              <h1 className="text-2xl font-bold text-white font-primary">
                {title}
              </h1>
            )}
          </div>
        )}
        <p className="font-bold text-white">{text}</p>

        <div className="flex items-center justify-center w-full mt-auto">
          {admin ? (
            <Button
              onClick={handleClick}
              variant={"default"}
              className={cn(
                "w-[120px] justify-center font-normal mt-3 bg-secondary-celeste border-none rounded-2xl"
              )}
            >
              <span className="text-white">{button}</span>
            </Button>
          ) : (
            <div>
              {member ? (
                <Button
                  variant={"default"}
                  className={cn(
                    "w-[120px] justify-center font-normal mt-3 bg-secondary-celeste border-none rounded-2xl"
                  )}
                >
                  <span className="text-white">{button}</span>
                </Button>
              ) : (
                <Button
                  variant={"default"}
                  className={cn(
                    "w-[120px] justify-center font-normal mt-3 bg-secondary-celeste border-none rounded-2xl"
                  )}
                >
                  <span className="text-white">{button}</span>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeEventComponent;
