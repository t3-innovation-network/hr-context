import { ICredentialSubject, ILinkedDataObject, IVerifiableCredential } from '@digitalcredentials/ssi';

// Partly implements https://schema.org/Person
export interface IPerson extends ILinkedDataObject {
  type: ['Person', ...Array<string>],
  email?: string
}

export interface IFrameworkMatch extends ILinkedDataObject {
  // id - OBv3 alignment 'targetUrl'
  name?: string // OBv3 alignment 'targetName'
  socCode?: string[]
  framework?: string
  similarityScore?: number
}

export interface ISkill extends ILinkedDataObject {
  id: string
  name: string
  description?: string
  source?: string | object
  frameworkMatch?: IFrameworkMatch[]
}

export interface ISkillClaim extends ICredentialSubject {
  type: ['SkillClaim', ...Array<string>]
  person: IPerson
  narrative?: string
  skill: ISkill[]
}

export interface ISkillClaimCredential extends IVerifiableCredential {
  type: [
    'VerifiableCredential',
    'SkillClaimCredential',
    ...Array<string>
  ],
  id: string,
  credentialSubject: ISkillClaim
}


