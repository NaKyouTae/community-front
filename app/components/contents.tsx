import Providers from "@/app/redux/Providers";

function Contents({ children }) {
    return (
        <div className={"contents"}>
            <Providers>{children}</Providers>
        </div>
    )
}

export default Contents