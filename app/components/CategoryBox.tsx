import { IconType } from "react-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { use, useCallback } from "react";
import gs from "query-string";

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ 
    icon: Icon, 
    label,
    selected 
    }
) => {

    // use query string to parse the url and get the current query
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {      
        let currentQuery = {};

        // if there are params, parse them
        if(params) {
            currentQuery = gs.parse(params.toString());
        }

        // update the query with the new category
        const updatedQuery : any = {
            ...currentQuery,
            category: label
        }

        // if the category is already selected, remove it
        if(params?.get('category') === label) {
            delete updatedQuery.category;
        }

        const url = gs.stringifyUrl({
            url: '/',
            query: updatedQuery}, 
                { skipNull: true }
            );
            
        router.push(url);
    
    }, [label, params]);

    return (
        <div
            onClick={handleClick} 
            className={`
            flex
            flex-col
            items-center
            justify-center
            gap-2
            p-3
            border-b-2
            hover:text-neutral-800
            transition
            cursor-pointer
            ${selected ? 'border-b-neural-800' : 'border-transparent'}
            ${selected ? 'text-neutral-800' : 'text-neutral-500'}
            `}
        >
            <Icon size={26} />
            <div className="
                font-medium
                text-sm
            "
            >{label}</div>
        </div>
    )
};

export default CategoryBox;

