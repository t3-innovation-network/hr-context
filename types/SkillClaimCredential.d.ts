import { IAlignment, ICredentialSubject, ILinkedDataObject, IVerifiableCredential } from '@digitalcredentials/ssi';

// Partly implements https://schema.org/Person
export interface IPerson extends ILinkedDataObject {
  type: ['Person', ...Array<string>],
  email?: string
}

export interface ISkill extends ILinkedDataObject {
  id: string,
  name: string,
  description?: string,
  source?: string,
  confidence?: number,
  alignment?: IAlignment[]
}

export interface ISkillClaim extends ICredentialSubject {
  type: ['SkillClaim', ...Array<string>],
  person: IPerson,
  narrative?: string,
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


