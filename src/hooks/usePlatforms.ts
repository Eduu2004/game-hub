import useData from "./useData";

interface Platform {
id: number;
name: string;
slot: string;
}

const usePlatforms = () => useData<Platform>("/platforms/lists/parents")

export default usePlatforms;