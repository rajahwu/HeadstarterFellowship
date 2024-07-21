export default function BaseLayout({ children }) {
    return (
         <div className="flex min-h-screen w-full flex-col">
            { children }
        </div> 
    )
}