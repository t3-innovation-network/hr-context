/* eslint-disable */
/*!
 * Copyright (c) 2026 T3 Innovation Network. All rights reserved.
 */
module.exports = {
  "@context": {
    "@protected": true,
    "id": "@id",
    "type": "@type",

    "SelfIssuedCredential": "https://w3id.org/hr#SelfIssuedCredential",

    "SkillClaimCredential": "https://w3id.org/hr#SkillClaimCredential",

    "SkillClaim": {
      "@id": "https://w3id.org/hr#SkillClaim",
      "@context": {
        "@protected": true,
        "id": "@id",
        "type": "@type",

        "person": {
          "@id": "https://w3id.org/hr#person",
          "@type": "https://schema.org/Person"
        },
        "skill": {
          "@id": "https://w3id.org/hr#skill",
          "@type": "@id"
        }
      }
    },
    "source": "https://w3id.org/hr#source",
    "confidence": "https://w3id.org/hr#confidence",
    "email": "https://schema.org/email",

    "LERRSCredential": {
      "@id": "https://w3id.org/hr#LERRSCredential",

      "@context": {
        "@protected": true,

        "duration": "https://w3id.org/hr#duration",

        "educationAndLearning": {
          "@id": "https://w3id.org/hr#educationAndLearning",
          "@container": "@list"
        },

        "employmentHistory": {
          "@id": "https://w3id.org/hr#employmentHistory",
          "@container": "@list"
        },

        "employmentHistoryItem": "https://w3id.org/hr#employmentHistoryItem",

        "endDate": "https://w3id.org/hr#endDate",

        "EmploymentHistoryItemCredential": "https://w3id.org/hr#EmploymentHistoryItemCredential",

        "keyword": {
          "@id:": "https://w3id.org/hr#keyword",
          "@container": "@set"
        },
        "name": "http://schema.org#name",
        "narrative": "https://w3id.org/hr#narrative",
        "person": "https://w3id.org/hr#person",
        "primaryLanguage": "https://w3id.org/hr#primaryLanguage",
        "text": "https://w3id.org/hr#text",
        "yearsOfExperience": "https://w3id.org/hr#yearsOfExperience",
        "description": "https://w3id.org/hr#description",
        "definitionReference": "https://w3id.org/hr#definitionReference",
        "schemeReference": "https://w3id.org/hr#schemeReference",
        "endorser": {
          "@id:": "https://w3id.org/hr#endorser",
          "@container": "@set"
        },

        "organization": "https://w3id.org/hr#organization",
        "Resume": "https://w3id.org/hr#Resume",

        "skill": {
          "@id": "https://w3id.org/hr#skill",
          "@container": "@list"
        },

        "startDate": "https://w3id.org/hr#startDate",

        "stillEmployed": "https://w3id.org/hr#stillEmployed",

        "title": "https://w3id.org/hr#title",
        "tradeName": "https://w3id.org/hr#tradeName",

        "lastUsedDate": {
          "@id": "https://w3id.org/hr#lastUsedDate",
          "@type": "https://www.w3.org/2001/XMLSchema#date"
        },
        "interestLevel": "https://w3id.org/hr#interestLevel",
        "comment": {
          "@id:": "https://w3id.org/hr#comment",
          "@container": "@set"
        }
      }
    }
  }
};
