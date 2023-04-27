import { ServiceProto } from 'tsrpc-proto';
import { ReqGetActivityAllDetails, ResGetActivityAllDetails } from './v1/Activity/PtlGetActivityAllDetails';
import { ReqGetActivityDetails, ResGetActivityDetails } from './v1/Activity/PtlGetActivityDetails';
import { ReqGetCommunity, ResGetCommunity } from './v1/Community/PtlGetCommunity';
import { ReqGetCommunityMemberDetails, ResGetCommunityMemberDetails } from './v1/CommunityMember/PtlGetCommunityMemberDetails';
import { ReqGetCourseAllDetails, ResGetCourseAllDetails } from './v1/Course/PtlGetCourseAllDetails';
import { ReqGetCourseDetails, ResGetCourseDetails } from './v1/Course/PtlGetCourseDetails';
import { ReqGetHackathonsDetails, ResGetHackathonsDetails } from './v1/Hackathons/PtlGetHackathonsDetails';
import { ReqHello, ResHello } from './v1/Hello/PtlHello';
import { ReqGetMediaDetails, ResGetMediaDetails } from './v1/Media/PtlGetMediaDetails';

export interface ServiceType {
    api: {
        "v1/Activity/GetActivityAllDetails": {
            req: ReqGetActivityAllDetails,
            res: ResGetActivityAllDetails
        },
        "v1/Activity/GetActivityDetails": {
            req: ReqGetActivityDetails,
            res: ResGetActivityDetails
        },
        "v1/Community/GetCommunity": {
            req: ReqGetCommunity,
            res: ResGetCommunity
        },
        "v1/CommunityMember/GetCommunityMemberDetails": {
            req: ReqGetCommunityMemberDetails,
            res: ResGetCommunityMemberDetails
        },
        "v1/Course/GetCourseAllDetails": {
            req: ReqGetCourseAllDetails,
            res: ResGetCourseAllDetails
        },
        "v1/Course/GetCourseDetails": {
            req: ReqGetCourseDetails,
            res: ResGetCourseDetails
        },
        "v1/Hackathons/GetHackathonsDetails": {
            req: ReqGetHackathonsDetails,
            res: ResGetHackathonsDetails
        },
        "v1/Hello/Hello": {
            req: ReqHello,
            res: ResHello
        },
        "v1/Media/GetMediaDetails": {
            req: ReqGetMediaDetails,
            res: ResGetMediaDetails
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 20,
    "services": [
        {
            "id": 11,
            "name": "v1/Activity/GetActivityAllDetails",
            "type": "api"
        },
        {
            "id": 13,
            "name": "v1/Activity/GetActivityDetails",
            "type": "api"
        },
        {
            "id": 14,
            "name": "v1/Community/GetCommunity",
            "type": "api"
        },
        {
            "id": 9,
            "name": "v1/CommunityMember/GetCommunityMemberDetails",
            "type": "api"
        },
        {
            "id": 6,
            "name": "v1/Course/GetCourseAllDetails",
            "type": "api"
        },
        {
            "id": 7,
            "name": "v1/Course/GetCourseDetails",
            "type": "api"
        },
        {
            "id": 10,
            "name": "v1/Hackathons/GetHackathonsDetails",
            "type": "api"
        },
        {
            "id": 0,
            "name": "v1/Hello/Hello",
            "type": "api"
        },
        {
            "id": 8,
            "name": "v1/Media/GetMediaDetails",
            "type": "api"
        }
    ],
    "types": {
        "v1/Activity/PtlGetActivityAllDetails/ReqGetActivityAllDetails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 1,
                    "name": "locale",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Activity/PtlGetActivityAllDetails/ResGetActivityAllDetails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "project_details",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/Activity/PtlGetActivityDetails/ReqGetActivityDetails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "locale",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Activity/PtlGetActivityDetails/ResGetActivityDetails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "project_details",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/Community/PtlGetCommunity/ReqGetCommunity": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "locale",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Community/PtlGetCommunity/ResGetCommunity": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "project_details",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/CommunityMember/PtlGetCommunityMemberDetails/ReqGetCommunityMemberDetails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 1,
                    "name": "locale",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/CommunityMember/PtlGetCommunityMemberDetails/ResGetCommunityMemberDetails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "project_details",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/Course/PtlGetCourseAllDetails/ReqGetCourseAllDetails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 2,
                    "name": "databaseId",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "locale",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "v1/Course/PtlGetCourseAllDetails/ResGetCourseAllDetails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "project_details",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/Course/PtlGetCourseDetails/ReqGetCourseDetails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 1,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "locale",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Course/PtlGetCourseDetails/ResGetCourseDetails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "project_details",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/Hackathons/PtlGetHackathonsDetails/ReqGetHackathonsDetails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 1,
                    "name": "locale",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Hackathons/PtlGetHackathonsDetails/ResGetHackathonsDetails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "project_details",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/Hello/PtlHello/ReqHello": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "hello",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Hello/PtlHello/ResHello": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "v1/Media/PtlGetMediaDetails/ReqGetMediaDetails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 1,
                    "name": "locale",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Media/PtlGetMediaDetails/ResGetMediaDetails": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "project_details",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        }
    }
};