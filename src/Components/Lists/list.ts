interface Incident {
    id : number,
    title : string,
    description : string,
    severity : "Low" | "Medium" | "High",
    reported_at : any
}

const list : Incident[] = [
    {
      "id": 4,
      "title": "Unauthorized Data Access by API",
      "description": "Public API endpoint allowed access to restricted user data without authentication...",
      "severity": "High",
      "reported_at": "2025-04-05T11:45:00Z"
    },
    {
      "id": 5,
      "title": "Content Filtering Bypass",
      "description": "Simple URL encoding tricks allowed users to bypass content moderation filters...",
      "severity": "Medium",
      "reported_at": "2025-04-07T16:20:00Z"
    },
    {
      "id": 6,
      "title": "Model Drift in Fraud Detection",
      "description": "Fraud detection model performance degraded significantly on new transaction patterns...",
      "severity": "High",
      "reported_at": "2025-04-10T08:10:00Z"
    },
    {
      "id": 7,
      "title": "Token Expiry Mismanagement",
      "description": "Expired session tokens remained active due to improper cache invalidation...",
      "severity": "Medium",
      "reported_at": "2025-04-11T15:30:00Z"
    },
    {
      "id": 8,
      "title": "Unexpected Bias in Resume Screening AI",
      "description": "Resume screening system showed preferential ranking for certain universities...",
      "severity": "High",
      "reported_at": "2025-04-12T10:05:00Z"
    },
    {
      "id": 9,
      "title": "Mislabeling in Image Classifier",
      "description": "AI model misclassified emergency vehicles as normal traffic under low-light conditions...",
      "severity": "Low",
      "reported_at": "2025-04-14T19:00:00Z"
    },
    {
      "id": 10,
      "title": "Privacy Violation in Voice Assistant Logs",
      "description": "Recorded conversations were unintentionally stored and accessible without user consent...",
      "severity": "High",
      "reported_at": "2025-04-17T13:50:00Z"
    },
    {
      "id": 11,
      "title": "Feedback Loop Amplifying Misinformation",
      "description": "Recommendation system unintentionally amplified false information sources...",
      "severity": "Medium",
      "reported_at": "2025-04-18T07:35:00Z"
    }
  ]
  

  export default list;