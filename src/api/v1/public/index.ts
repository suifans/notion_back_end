import {Client} from "@notionhq/client";

const auth = "secret_r4n8miWzLPAd9hb24ZkJxRQtlNPhHlyDtJktfb6rQei"

const  queryPageId =async (pageId: string) =>{


    const notion = new Client({ auth })

    const response = await notion.pages.retrieve({ page_id: pageId },);

    return response

}

const queryProjectAllDetail = async (databaseId: string) =>{

    const notion = new Client({ auth})

    const response = await notion.databases.query({
        database_id: databaseId,
    });

    return response

}

const queryProjectAllDetailID = async (databaseId: string) =>{

    const notion = new Client({ auth })

    const response = await notion.databases.query({
        database_id: databaseId,
        sorts: [
            {
                property: "ID",
                direction: "ascending"
            }
        ],
    });

    return response

}

export {queryPageId,queryProjectAllDetail,queryProjectAllDetailID}

