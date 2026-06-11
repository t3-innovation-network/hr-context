import { ICredentialSubject, ILinkedDataObject, IVerifiableCredential } from '@digitalcredentials/ssi';

// Partly implements https://schema.org/Person
export interface IPerson extends ILinkedDataObject {
  type: ['Person', ...Array<string>],
  email?: string
}

export interface IFrameworkMatch extends ILinkedDataObject {
  // 'id' - Inherited from ILinkedDataObject, maps to OBv3 alignment 'targetUrl'
  name?: string // Maps to OBv3 alignment 'targetName'
  socCode?: string[]
  framework?: string
  similarityScore?: number
}

export interface ISkill extends ILinkedDataObject {
  id: string
  name: string
  description?: string
  source?: string | object
  durationPerformed?: string
  narrative?: string // OBv3 'criteria.narrative' for individual skill
  frameworkMatch?: IFrameworkMatch[]
}

// Skill inferred by an extraction pipeline (e.g. an LLM), as opposed to
// user-entered skills in ISkillClaim 'skill'.
export interface IInferredSkill extends ILinkedDataObject {
  id: string
  name: string
  source: string // Extraction source, e.g. 'ollama'
  model?: string // LLM model used for inference, e.g. 'qwen2.5:7b'
  frameworkMatch?: IFrameworkMatch[]
}

export interface ISkillClaim extends ICredentialSubject {
  type: ['SkillClaim', ...Array<string>]
  person: IPerson
  narrative?: string // High level multi-skill VC narrative
  skill: ISkill[]
  inferredSkill?: IInferredSkill[]
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


