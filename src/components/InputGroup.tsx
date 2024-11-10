import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

interface InputGroupProps {
  onSearch: (query: string) => void;
}

export default function InputGroup({ onSearch }: InputGroupProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="relative w-full rounded-full max-w-screen">
      <div className="absolute inset-y-0 left-0 flex items-center pl-1 ">
        <Button
          variant="ghost"
          size="icon"
          className="w-8 h-8 bg-white rounded-full"
        >
          <AdjustmentsHorizontalIcon className="w-4 h-4" />
          <span className="sr-only">Filtrar</span>
        </Button>
      </div>
      <Input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder=""
        className="h-10 pl-12 pr-12 border-none rounded-full bg-inactive-button-bg"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-1">
        <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full">
          <Search className="w-4 h-4" />
          <span className="sr-only">Buscar</span>
        </Button>
      </div>
    </div>
  );
}
