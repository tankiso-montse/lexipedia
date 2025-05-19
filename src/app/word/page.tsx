
// import { Search } from "lucide-react";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import SearchBar from "../components/SearchBar";
import PosButton from "../components/PosButton";
import InfoBlock from "../components/InfoBlock";
import { getSearchedWord } from "@/services/dictionaryService";

export default async function SearchPage() {
   const searchedTerm = await getSearchedWord()
  // const router = useRouter();
  // const [query, setQuery] = useState("");
  // const [isTyping, setIsTyping] = useState(false);

  // useEffect(() => {
  //   setIsTyping(query.trim() !== "");
  // }, [query]);

  return (
    <div className="bg-secondary h-full">
      <div className="flex items-center justify-center z-50 h-1/6">
        <SearchBar />
      </div>
      <div className="h-5/6 flex gap-4 absolute w-5/6 right-0 text-textColor pr-12 pt-4">
        <div>
          <span className="text-7xl">Aa</span>
        </div>
        <div className="h-11/12 w-0.5 bg-[#938048] mb-6"></div>
        <div className="pl-8 pr-20 pt-16 flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-8xl">{searchedTerm.wordDefinition?.word}</span>
            <span className="pl-1 text-xl">är′kĭ-tĕkt</span>
          </div>
          <div className="flex gap-2">
            <PosButton partsOfSpeech="noun" />
            <PosButton partsOfSpeech="verb" />
            <PosButton partsOfSpeech="adjective" />
          </div>
          <InfoBlock
            heading="Definition:"
            content="A creature that sleeps two hours a week consumes entirely too much caffeine and likes overuse,
                    words such as juxtaposition."
          />
          <InfoBlock
            heading="Examples:"
            content="The architect was a master of his craft, designing buildings that were both functional and beautiful."
          />
        </div>
      </div>
    </div>
  );
}
