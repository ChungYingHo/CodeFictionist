import Giscus from "@giscus/react";

export default function Comment(){
    return(
        <div style={{paddingTop: 10}}>
            <Giscus
                id="comments"
                repo="ChungYingHo/CodeFictionist"
                repoId="R_kgDOK5rGAQ"
                category="Announcements"
                categoryId="DIC_kwDOK5rGAc4Cbw0r"
                mapping="pathname"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="bottom"
                theme="light"
                lang="zh-TW"
                loading="lazy"
                />
        </div>
    )
}