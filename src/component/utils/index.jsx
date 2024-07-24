

export function getStatus(status){
    switch (status) {
        case 'online':
            return (<span className="capitalize py-1 px-2 rounded-md text-sm text-white bg-green-600">
                {status.toUpperCase()}
            </span>)
        case 'offline':
            return (<span className="capitalize py-1 px-2 rounded-md text-sm text-white bg-gray-600">
                {status.toUpperCase()}
            </span>) 
    
        default:
    }
}