import React, { useState, FormEvent, Suspense } from "react";
import useSWR from "swr";
import cogoToast from "cogo-toast";

import { RecipeCard, SearchBox } from "../../components";
import { instance } from "../../config";
import { RECIPERES } from "../../@types";
import { NoRecipe } from "./common";
import { useRecipe } from "../../hooks";
import { SearchLoader, UILoader } from "../../components/loaders";

export const Home = () => {
  const { loading, searchRecipe } = useRecipe();
  //useswr fetcher
  const fetcher = (url: string) => instance.get(url).then((res) => res.data);
  const { data, error } = useSWR("/recipe", fetcher, { suspense: true });

  if (error) {
    console.log(error);
    cogoToast.error(error?.response?.data?.error);
    return null;
  }
  const [query, setQuery] = useState<string>("");
  const [state, setState] = useState<RECIPERES[]>(data || {});
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;
    const result: RECIPERES[] = await searchRecipe(query);
    if (result) {
      setState(result);
    }
  };

  return (
    <Suspense fallback={<UILoader />}>
      <div className="text-white w-full h-full">
        <SearchBox
          title="Recipe"
          onSearch={handleSearch}
          setQuery={setQuery}
          query={query}
          disabled={!data?.length}
        />
        {loading ? (
          <SearchLoader />
        ) : (
          <>
            {!!state?.length ? (
              <div className="flex flex-wrap gap-3 flex-col items-center justify-center md:justify-start md:items-start md:flex-row w-full">
                {state.map((recipe: RECIPERES, index: number) => (
                  <RecipeCard
                    key={index + recipe._id}
                    {...recipe}
                    user={recipe?.user?.email as string}
                  />
                ))}
              </div>
            ) : (
              <>
                <NoRecipe />
              </>
            )}
          </>
        )}
      </div>
    </Suspense>
  );
};