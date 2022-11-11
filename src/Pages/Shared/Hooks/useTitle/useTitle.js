import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-dragon-news`;
    }, [title])

};

export default useTitle;