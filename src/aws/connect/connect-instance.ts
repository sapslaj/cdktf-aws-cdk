// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Connect
*/
export interface ConnectInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#auto_resolve_best_voices_enabled ConnectInstance#auto_resolve_best_voices_enabled}
  */
  readonly autoResolveBestVoicesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#contact_flow_logs_enabled ConnectInstance#contact_flow_logs_enabled}
  */
  readonly contactFlowLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#contact_lens_enabled ConnectInstance#contact_lens_enabled}
  */
  readonly contactLensEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#directory_id ConnectInstance#directory_id}
  */
  readonly directoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#early_media_enabled ConnectInstance#early_media_enabled}
  */
  readonly earlyMediaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#identity_management_type ConnectInstance#identity_management_type}
  */
  readonly identityManagementType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#inbound_calls_enabled ConnectInstance#inbound_calls_enabled}
  */
  readonly inboundCallsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#instance_alias ConnectInstance#instance_alias}
  */
  readonly instanceAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#outbound_calls_enabled ConnectInstance#outbound_calls_enabled}
  */
  readonly outboundCallsEnabled: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#timeouts ConnectInstance#timeouts}
  */
  readonly timeouts?: ConnectInstanceTimeouts;
}
export interface ConnectInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#create ConnectInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html#delete ConnectInstance#delete}
  */
  readonly delete?: string;
}

export function connectInstanceTimeoutsToTerraform(struct?: ConnectInstanceTimeoutsOutputReference | ConnectInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ConnectInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html aws_connect_instance}
*/
export class ConnectInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_connect_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/connect_instance.html aws_connect_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoResolveBestVoicesEnabled = config.autoResolveBestVoicesEnabled;
    this._contactFlowLogsEnabled = config.contactFlowLogsEnabled;
    this._contactLensEnabled = config.contactLensEnabled;
    this._directoryId = config.directoryId;
    this._earlyMediaEnabled = config.earlyMediaEnabled;
    this._identityManagementType = config.identityManagementType;
    this._inboundCallsEnabled = config.inboundCallsEnabled;
    this._instanceAlias = config.instanceAlias;
    this._outboundCallsEnabled = config.outboundCallsEnabled;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_resolve_best_voices_enabled - computed: false, optional: true, required: false
  private _autoResolveBestVoicesEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get autoResolveBestVoicesEnabled() {
    return this.getBooleanAttribute('auto_resolve_best_voices_enabled') as any;
  }
  public set autoResolveBestVoicesEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._autoResolveBestVoicesEnabled = value;
  }
  public resetAutoResolveBestVoicesEnabled() {
    this._autoResolveBestVoicesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoResolveBestVoicesEnabledInput() {
    return this._autoResolveBestVoicesEnabled
  }

  // contact_flow_logs_enabled - computed: false, optional: true, required: false
  private _contactFlowLogsEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get contactFlowLogsEnabled() {
    return this.getBooleanAttribute('contact_flow_logs_enabled') as any;
  }
  public set contactFlowLogsEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._contactFlowLogsEnabled = value;
  }
  public resetContactFlowLogsEnabled() {
    this._contactFlowLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactFlowLogsEnabledInput() {
    return this._contactFlowLogsEnabled
  }

  // contact_lens_enabled - computed: false, optional: true, required: false
  private _contactLensEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get contactLensEnabled() {
    return this.getBooleanAttribute('contact_lens_enabled') as any;
  }
  public set contactLensEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._contactLensEnabled = value;
  }
  public resetContactLensEnabled() {
    this._contactLensEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactLensEnabledInput() {
    return this._contactLensEnabled
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // directory_id - computed: false, optional: true, required: false
  private _directoryId?: string | undefined; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string | undefined) {
    this._directoryId = value;
  }
  public resetDirectoryId() {
    this._directoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId
  }

  // early_media_enabled - computed: false, optional: true, required: false
  private _earlyMediaEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get earlyMediaEnabled() {
    return this.getBooleanAttribute('early_media_enabled') as any;
  }
  public set earlyMediaEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._earlyMediaEnabled = value;
  }
  public resetEarlyMediaEnabled() {
    this._earlyMediaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyMediaEnabledInput() {
    return this._earlyMediaEnabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_management_type - computed: false, optional: false, required: true
  private _identityManagementType?: string; 
  public get identityManagementType() {
    return this.getStringAttribute('identity_management_type');
  }
  public set identityManagementType(value: string) {
    this._identityManagementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityManagementTypeInput() {
    return this._identityManagementType
  }

  // inbound_calls_enabled - computed: false, optional: false, required: true
  private _inboundCallsEnabled?: boolean | cdktf.IResolvable; 
  public get inboundCallsEnabled() {
    return this.getBooleanAttribute('inbound_calls_enabled') as any;
  }
  public set inboundCallsEnabled(value: boolean | cdktf.IResolvable) {
    this._inboundCallsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundCallsEnabledInput() {
    return this._inboundCallsEnabled
  }

  // instance_alias - computed: false, optional: true, required: false
  private _instanceAlias?: string | undefined; 
  public get instanceAlias() {
    return this.getStringAttribute('instance_alias');
  }
  public set instanceAlias(value: string | undefined) {
    this._instanceAlias = value;
  }
  public resetInstanceAlias() {
    this._instanceAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceAliasInput() {
    return this._instanceAlias
  }

  // outbound_calls_enabled - computed: false, optional: false, required: true
  private _outboundCallsEnabled?: boolean | cdktf.IResolvable; 
  public get outboundCallsEnabled() {
    return this.getBooleanAttribute('outbound_calls_enabled') as any;
  }
  public set outboundCallsEnabled(value: boolean | cdktf.IResolvable) {
    this._outboundCallsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundCallsEnabledInput() {
    return this._outboundCallsEnabled
  }

  // service_role - computed: true, optional: false, required: false
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ConnectInstanceTimeouts | undefined; 
  private __timeoutsOutput = new ConnectInstanceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ConnectInstanceTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_resolve_best_voices_enabled: cdktf.booleanToTerraform(this._autoResolveBestVoicesEnabled),
      contact_flow_logs_enabled: cdktf.booleanToTerraform(this._contactFlowLogsEnabled),
      contact_lens_enabled: cdktf.booleanToTerraform(this._contactLensEnabled),
      directory_id: cdktf.stringToTerraform(this._directoryId),
      early_media_enabled: cdktf.booleanToTerraform(this._earlyMediaEnabled),
      identity_management_type: cdktf.stringToTerraform(this._identityManagementType),
      inbound_calls_enabled: cdktf.booleanToTerraform(this._inboundCallsEnabled),
      instance_alias: cdktf.stringToTerraform(this._instanceAlias),
      outbound_calls_enabled: cdktf.booleanToTerraform(this._outboundCallsEnabled),
      timeouts: connectInstanceTimeoutsToTerraform(this._timeouts),
    };
  }
}