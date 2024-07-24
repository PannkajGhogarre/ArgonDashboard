
export function completion(comp) {
    switch (comp) {
        case "60%":
            return(
                <div className="flex items-center gap-2">
                    <p>60%</p>
                    <div className="w-28 h-1 border border-gray-300 bg-blue-400"></div>
                </div>
            )
            case "100%":
                return(
                    <div className="flex items-center gap-2">
                        <p>100%</p>
                        <div className="w-28 h-1 border border-gray-300 bg-green-700"></div>
                    </div>
                )
            case "0%":
                return(
                    <div className="flex items-center gap-2">
                        <p>0%</p>
                        <div className="w-28 h-1 border border-gray-300 bg-white"></div>
                    </div>
                )
            case "30%":
                return(
                    <div className="flex items-center gap-2">
                        <p>30%</p>
                        <div className="w-28 h-1 border border-gray-300 bg-red-600"></div>
                    </div>
                )
            case "80%":
                return(
                    <div className="flex items-center gap-2">
                        <p>80%</p>
                        <div className="w-28 h-1 border border-gray-300 bg-blue-700"></div>
                    </div>
                )
            
    
        default:
            break;
    }
    
}