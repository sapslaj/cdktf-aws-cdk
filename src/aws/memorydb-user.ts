// https://www.terraform.io/docs/providers/aws/r/memorydb_user.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MemorydbUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_user.html#access_string MemorydbUser#access_string}
  */
  readonly accessString: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_user.html#tags MemorydbUser#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_user.html#tags_all MemorydbUser#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_user.html#user_name MemorydbUser#user_name}
  */
  readonly userName: string;
  /**
  * authentication_mode block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_user.html#authentication_mode MemorydbUser#authentication_mode}
  */
  readonly authenticationMode: MemorydbUserAuthenticationMode;
}
export interface MemorydbUserAuthenticationMode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_user.html#passwords MemorydbUser#passwords}
  */
  readonly passwords: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/memorydb_user.html#type MemorydbUser#type}
  */
  readonly type: string;
}

export function memorydbUserAuthenticationModeToTerraform(struct?: MemorydbUserAuthenticationModeOutputReference | MemorydbUserAuthenticationMode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    passwords: cdktf.listMapper(cdktf.stringToTerraform)(struct!.passwords),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class MemorydbUserAuthenticationModeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): MemorydbUserAuthenticationMode | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._passwords) {
      hasAnyValues = true;
      internalValueResult.passwords = this._passwords;
    }
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MemorydbUserAuthenticationMode | undefined) {
    if (value === undefined) {
      this._passwords = undefined;
      this._type = undefined;
    }
    else {
      this._passwords = value.passwords;
      this._type = value.type;
    }
  }

  // passwords - computed: false, optional: false, required: true
  private _passwords?: string[]; 
  public get passwords() {
    return this.getListAttribute('passwords');
  }
  public set passwords(value: string[]) {
    this._passwords = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordsInput() {
    return this._passwords;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/memorydb_user.html aws_memorydb_user}
*/
export class MemorydbUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_memorydb_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/memorydb_user.html aws_memorydb_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MemorydbUserConfig
  */
  public constructor(scope: Construct, id: string, config: MemorydbUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_memorydb_user',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessString = config.accessString;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._userName = config.userName;
    this._authenticationMode.internalValue = config.authenticationMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_string - computed: false, optional: false, required: true
  private _accessString?: string; 
  public get accessString() {
    return this.getStringAttribute('access_string');
  }
  public set accessString(value: string) {
    this._accessString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStringInput() {
    return this._accessString;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // minimum_engine_version - computed: true, optional: false, required: false
  public get minimumEngineVersion() {
    return this.getStringAttribute('minimum_engine_version');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // authentication_mode - computed: false, optional: false, required: true
  private _authenticationMode = new MemorydbUserAuthenticationModeOutputReference(this as any, "authentication_mode", true);
  public get authenticationMode() {
    return this._authenticationMode;
  }
  public putAuthenticationMode(value: MemorydbUserAuthenticationMode) {
    this._authenticationMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationModeInput() {
    return this._authenticationMode.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_string: cdktf.stringToTerraform(this._accessString),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      user_name: cdktf.stringToTerraform(this._userName),
      authentication_mode: memorydbUserAuthenticationModeToTerraform(this._authenticationMode.internalValue),
    };
  }
}