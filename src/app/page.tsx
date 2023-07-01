import getApiResponse from "@/app/services/api_provider";
import ApiResults from "./services/api_provider";
import SearchBar from "./components/searchbar";

export default function Home() {
  return (
    <main>
      <body className="content-center">
        <div className="place-content-center">
          <div>
            <SearchBar />
            <ApiResults /> {/* Include the ApiResults component here */}
          </div>
        </div>
      </body>
    </main>
  );
}
