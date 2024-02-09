import { useState, useEffect } from 'react';
import Resources from '../Resources.json';

const ResourcesSidebar = ({activeBlogTags}) => {

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
            <div className="flex flex-col pt-12 gap-4">
                {resources && resources.map((resource) => {
                    if (resource) return <a target="_blank" href={resource.address} className="text-[#E88D67]">{resource.address}</a>
                })}
            </div>
        </div>
     );
}
 
export default ResourcesSidebar;