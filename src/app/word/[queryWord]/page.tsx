
import InfoBlock from "@/app/components/InfoBlock";
import PosButton from "@/app/components/PosButton";
import SearchBar from "@/app/components/SearchBar";
import { getSearchedWord } from "@/services/dictionaryService";

export default async function SearchPage({ params }: { params: Promise<{ queryWord: string }> }) {

 const { queryWord } = await params;
  const searchedTerm = await getSearchedWord(queryWord)

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
          <div className="flex flex-col gap-3">
            <span className="text-8xl">{searchedTerm.wordDefinition?.word}</span>
            <span className="pl-1 text-xl">{searchedTerm.wordPronunciation?.pronunciation}</span>
          </div>
          <div className="flex gap-2">
            <PosButton partsOfSpeech="noun" />
            <PosButton partsOfSpeech="verb" />
            <PosButton partsOfSpeech="adjective" />
          </div>
          <InfoBlock
            heading="Definition:"
            content={searchedTerm.wordDefinition?.definition}
          />
          <InfoBlock
            heading="Examples:"
            content={searchedTerm.wordExample?.example}
          />
        </div>
      </div>
    </div>
  );
}
