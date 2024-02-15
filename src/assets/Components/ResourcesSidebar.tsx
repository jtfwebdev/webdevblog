import { useState, useEffect, useContext } from 'react';
import Resources from '../Resources.json';
import { FetchContext } from '../../App';

const ResourcesSidebar = ({activeBlogTags}) => {

    const fetching = useContext(FetchContext);

    const [resources, setResources] = useState(null);

    useEffect(() => {
        if (activeBlogTags) {

            let resourceArray = [];

            activeBlogTags.forEach((tag) => {
                let resource = Resources.find((item) => item.tags == tag.tag);
                resourceArray = [...resourceArray, resource]
            });

            setResources(resourceArray);
        }
    }, [activeBlogTags])

    return ( 
        <div className="sticky top-0 pr-[10%]">
            <div className='pt-4 w-fit'>
                <p className="font-poppins text-xl text-[#E88D67]">RESOURCES</p>
                <div className="w-inherit h-[3px] rounded bg-[#E88D67] mt-[4%]"></div>
            </div>
            {fetching && <ResourceSkeleton />}
            <div className="flex flex-col pt-12 gap-4">
                {resources && resources.map((resource) => {
                    if (resource) return <a target="_blank" href={resource.address} className="text-[#E88D67] text-wrap break-words">{resource.address}</a>
                })}
            </div>
        </div>
     );
}
 
export default ResourcesSidebar;

const ResourceSkeleton = () => {
    return (
        <div role="status" className="space-y-2.5 animate-pulse pt-12 mb-16">
            <div className="flex items-center w-full">
                <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
            </div>
            <div className="flex items-center w-full">
                <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-64"></div>
            </div>
            <div className="flex items-center w-full">
                <div className="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-64"></div>
            </div>
            <div className="flex items-center w-full">
                <div className="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
            </div>
            <div className="flex items-center w-full">
                <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-64"></div>
            </div>
        </div>
    )
}