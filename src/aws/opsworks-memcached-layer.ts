// https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpsworksMemcachedLayerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#allocated_memory OpsworksMemcachedLayer#allocated_memory}
  */
  readonly allocatedMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#auto_assign_elastic_ips OpsworksMemcachedLayer#auto_assign_elastic_ips}
  */
  readonly autoAssignElasticIps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#auto_assign_public_ips OpsworksMemcachedLayer#auto_assign_public_ips}
  */
  readonly autoAssignPublicIps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#auto_healing OpsworksMemcachedLayer#auto_healing}
  */
  readonly autoHealing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_configure_recipes OpsworksMemcachedLayer#custom_configure_recipes}
  */
  readonly customConfigureRecipes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_deploy_recipes OpsworksMemcachedLayer#custom_deploy_recipes}
  */
  readonly customDeployRecipes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_instance_profile_arn OpsworksMemcachedLayer#custom_instance_profile_arn}
  */
  readonly customInstanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_json OpsworksMemcachedLayer#custom_json}
  */
  readonly customJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_security_group_ids OpsworksMemcachedLayer#custom_security_group_ids}
  */
  readonly customSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_setup_recipes OpsworksMemcachedLayer#custom_setup_recipes}
  */
  readonly customSetupRecipes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_shutdown_recipes OpsworksMemcachedLayer#custom_shutdown_recipes}
  */
  readonly customShutdownRecipes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#custom_undeploy_recipes OpsworksMemcachedLayer#custom_undeploy_recipes}
  */
  readonly customUndeployRecipes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#drain_elb_on_shutdown OpsworksMemcachedLayer#drain_elb_on_shutdown}
  */
  readonly drainElbOnShutdown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#elastic_load_balancer OpsworksMemcachedLayer#elastic_load_balancer}
  */
  readonly elasticLoadBalancer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#install_updates_on_boot OpsworksMemcachedLayer#install_updates_on_boot}
  */
  readonly installUpdatesOnBoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#instance_shutdown_timeout OpsworksMemcachedLayer#instance_shutdown_timeout}
  */
  readonly instanceShutdownTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#name OpsworksMemcachedLayer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#stack_id OpsworksMemcachedLayer#stack_id}
  */
  readonly stackId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#system_packages OpsworksMemcachedLayer#system_packages}
  */
  readonly systemPackages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#tags OpsworksMemcachedLayer#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#tags_all OpsworksMemcachedLayer#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#use_ebs_optimized_instances OpsworksMemcachedLayer#use_ebs_optimized_instances}
  */
  readonly useEbsOptimizedInstances?: boolean | cdktf.IResolvable;
  /**
  * ebs_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#ebs_volume OpsworksMemcachedLayer#ebs_volume}
  */
  readonly ebsVolume?: OpsworksMemcachedLayerEbsVolume[];
}
export interface OpsworksMemcachedLayerEbsVolume {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#encrypted OpsworksMemcachedLayer#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#iops OpsworksMemcachedLayer#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#mount_point OpsworksMemcachedLayer#mount_point}
  */
  readonly mountPoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#number_of_disks OpsworksMemcachedLayer#number_of_disks}
  */
  readonly numberOfDisks: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#raid_level OpsworksMemcachedLayer#raid_level}
  */
  readonly raidLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#size OpsworksMemcachedLayer#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html#type OpsworksMemcachedLayer#type}
  */
  readonly type?: string;
}

function opsworksMemcachedLayerEbsVolumeToTerraform(struct?: OpsworksMemcachedLayerEbsVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    mount_point: cdktf.stringToTerraform(struct!.mountPoint),
    number_of_disks: cdktf.numberToTerraform(struct!.numberOfDisks),
    raid_level: cdktf.stringToTerraform(struct!.raidLevel),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html aws_opsworks_memcached_layer}
*/
export class OpsworksMemcachedLayer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_opsworks_memcached_layer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_memcached_layer.html aws_opsworks_memcached_layer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpsworksMemcachedLayerConfig
  */
  public constructor(scope: Construct, id: string, config: OpsworksMemcachedLayerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opsworks_memcached_layer',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allocatedMemory = config.allocatedMemory;
    this._autoAssignElasticIps = config.autoAssignElasticIps;
    this._autoAssignPublicIps = config.autoAssignPublicIps;
    this._autoHealing = config.autoHealing;
    this._customConfigureRecipes = config.customConfigureRecipes;
    this._customDeployRecipes = config.customDeployRecipes;
    this._customInstanceProfileArn = config.customInstanceProfileArn;
    this._customJson = config.customJson;
    this._customSecurityGroupIds = config.customSecurityGroupIds;
    this._customSetupRecipes = config.customSetupRecipes;
    this._customShutdownRecipes = config.customShutdownRecipes;
    this._customUndeployRecipes = config.customUndeployRecipes;
    this._drainElbOnShutdown = config.drainElbOnShutdown;
    this._elasticLoadBalancer = config.elasticLoadBalancer;
    this._installUpdatesOnBoot = config.installUpdatesOnBoot;
    this._instanceShutdownTimeout = config.instanceShutdownTimeout;
    this._name = config.name;
    this._stackId = config.stackId;
    this._systemPackages = config.systemPackages;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._useEbsOptimizedInstances = config.useEbsOptimizedInstances;
    this._ebsVolume = config.ebsVolume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_memory - computed: false, optional: true, required: false
  private _allocatedMemory?: number;
  public get allocatedMemory() {
    return this.getNumberAttribute('allocated_memory');
  }
  public set allocatedMemory(value: number ) {
    this._allocatedMemory = value;
  }
  public resetAllocatedMemory() {
    this._allocatedMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedMemoryInput() {
    return this._allocatedMemory
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_assign_elastic_ips - computed: false, optional: true, required: false
  private _autoAssignElasticIps?: boolean | cdktf.IResolvable;
  public get autoAssignElasticIps() {
    return this.getBooleanAttribute('auto_assign_elastic_ips');
  }
  public set autoAssignElasticIps(value: boolean | cdktf.IResolvable ) {
    this._autoAssignElasticIps = value;
  }
  public resetAutoAssignElasticIps() {
    this._autoAssignElasticIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAssignElasticIpsInput() {
    return this._autoAssignElasticIps
  }

  // auto_assign_public_ips - computed: false, optional: true, required: false
  private _autoAssignPublicIps?: boolean | cdktf.IResolvable;
  public get autoAssignPublicIps() {
    return this.getBooleanAttribute('auto_assign_public_ips');
  }
  public set autoAssignPublicIps(value: boolean | cdktf.IResolvable ) {
    this._autoAssignPublicIps = value;
  }
  public resetAutoAssignPublicIps() {
    this._autoAssignPublicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAssignPublicIpsInput() {
    return this._autoAssignPublicIps
  }

  // auto_healing - computed: false, optional: true, required: false
  private _autoHealing?: boolean | cdktf.IResolvable;
  public get autoHealing() {
    return this.getBooleanAttribute('auto_healing');
  }
  public set autoHealing(value: boolean | cdktf.IResolvable ) {
    this._autoHealing = value;
  }
  public resetAutoHealing() {
    this._autoHealing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHealingInput() {
    return this._autoHealing
  }

  // custom_configure_recipes - computed: false, optional: true, required: false
  private _customConfigureRecipes?: string[];
  public get customConfigureRecipes() {
    return this.getListAttribute('custom_configure_recipes');
  }
  public set customConfigureRecipes(value: string[] ) {
    this._customConfigureRecipes = value;
  }
  public resetCustomConfigureRecipes() {
    this._customConfigureRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigureRecipesInput() {
    return this._customConfigureRecipes
  }

  // custom_deploy_recipes - computed: false, optional: true, required: false
  private _customDeployRecipes?: string[];
  public get customDeployRecipes() {
    return this.getListAttribute('custom_deploy_recipes');
  }
  public set customDeployRecipes(value: string[] ) {
    this._customDeployRecipes = value;
  }
  public resetCustomDeployRecipes() {
    this._customDeployRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDeployRecipesInput() {
    return this._customDeployRecipes
  }

  // custom_instance_profile_arn - computed: false, optional: true, required: false
  private _customInstanceProfileArn?: string;
  public get customInstanceProfileArn() {
    return this.getStringAttribute('custom_instance_profile_arn');
  }
  public set customInstanceProfileArn(value: string ) {
    this._customInstanceProfileArn = value;
  }
  public resetCustomInstanceProfileArn() {
    this._customInstanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInstanceProfileArnInput() {
    return this._customInstanceProfileArn
  }

  // custom_json - computed: false, optional: true, required: false
  private _customJson?: string;
  public get customJson() {
    return this.getStringAttribute('custom_json');
  }
  public set customJson(value: string ) {
    this._customJson = value;
  }
  public resetCustomJson() {
    this._customJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customJsonInput() {
    return this._customJson
  }

  // custom_security_group_ids - computed: false, optional: true, required: false
  private _customSecurityGroupIds?: string[];
  public get customSecurityGroupIds() {
    return this.getListAttribute('custom_security_group_ids');
  }
  public set customSecurityGroupIds(value: string[] ) {
    this._customSecurityGroupIds = value;
  }
  public resetCustomSecurityGroupIds() {
    this._customSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityGroupIdsInput() {
    return this._customSecurityGroupIds
  }

  // custom_setup_recipes - computed: false, optional: true, required: false
  private _customSetupRecipes?: string[];
  public get customSetupRecipes() {
    return this.getListAttribute('custom_setup_recipes');
  }
  public set customSetupRecipes(value: string[] ) {
    this._customSetupRecipes = value;
  }
  public resetCustomSetupRecipes() {
    this._customSetupRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSetupRecipesInput() {
    return this._customSetupRecipes
  }

  // custom_shutdown_recipes - computed: false, optional: true, required: false
  private _customShutdownRecipes?: string[];
  public get customShutdownRecipes() {
    return this.getListAttribute('custom_shutdown_recipes');
  }
  public set customShutdownRecipes(value: string[] ) {
    this._customShutdownRecipes = value;
  }
  public resetCustomShutdownRecipes() {
    this._customShutdownRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customShutdownRecipesInput() {
    return this._customShutdownRecipes
  }

  // custom_undeploy_recipes - computed: false, optional: true, required: false
  private _customUndeployRecipes?: string[];
  public get customUndeployRecipes() {
    return this.getListAttribute('custom_undeploy_recipes');
  }
  public set customUndeployRecipes(value: string[] ) {
    this._customUndeployRecipes = value;
  }
  public resetCustomUndeployRecipes() {
    this._customUndeployRecipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUndeployRecipesInput() {
    return this._customUndeployRecipes
  }

  // drain_elb_on_shutdown - computed: false, optional: true, required: false
  private _drainElbOnShutdown?: boolean | cdktf.IResolvable;
  public get drainElbOnShutdown() {
    return this.getBooleanAttribute('drain_elb_on_shutdown');
  }
  public set drainElbOnShutdown(value: boolean | cdktf.IResolvable ) {
    this._drainElbOnShutdown = value;
  }
  public resetDrainElbOnShutdown() {
    this._drainElbOnShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainElbOnShutdownInput() {
    return this._drainElbOnShutdown
  }

  // elastic_load_balancer - computed: false, optional: true, required: false
  private _elasticLoadBalancer?: string;
  public get elasticLoadBalancer() {
    return this.getStringAttribute('elastic_load_balancer');
  }
  public set elasticLoadBalancer(value: string ) {
    this._elasticLoadBalancer = value;
  }
  public resetElasticLoadBalancer() {
    this._elasticLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticLoadBalancerInput() {
    return this._elasticLoadBalancer
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // install_updates_on_boot - computed: false, optional: true, required: false
  private _installUpdatesOnBoot?: boolean | cdktf.IResolvable;
  public get installUpdatesOnBoot() {
    return this.getBooleanAttribute('install_updates_on_boot');
  }
  public set installUpdatesOnBoot(value: boolean | cdktf.IResolvable ) {
    this._installUpdatesOnBoot = value;
  }
  public resetInstallUpdatesOnBoot() {
    this._installUpdatesOnBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installUpdatesOnBootInput() {
    return this._installUpdatesOnBoot
  }

  // instance_shutdown_timeout - computed: false, optional: true, required: false
  private _instanceShutdownTimeout?: number;
  public get instanceShutdownTimeout() {
    return this.getNumberAttribute('instance_shutdown_timeout');
  }
  public set instanceShutdownTimeout(value: number ) {
    this._instanceShutdownTimeout = value;
  }
  public resetInstanceShutdownTimeout() {
    this._instanceShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceShutdownTimeoutInput() {
    return this._instanceShutdownTimeout
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId: string;
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId
  }

  // system_packages - computed: false, optional: true, required: false
  private _systemPackages?: string[];
  public get systemPackages() {
    return this.getListAttribute('system_packages');
  }
  public set systemPackages(value: string[] ) {
    this._systemPackages = value;
  }
  public resetSystemPackages() {
    this._systemPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPackagesInput() {
    return this._systemPackages
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // use_ebs_optimized_instances - computed: false, optional: true, required: false
  private _useEbsOptimizedInstances?: boolean | cdktf.IResolvable;
  public get useEbsOptimizedInstances() {
    return this.getBooleanAttribute('use_ebs_optimized_instances');
  }
  public set useEbsOptimizedInstances(value: boolean | cdktf.IResolvable ) {
    this._useEbsOptimizedInstances = value;
  }
  public resetUseEbsOptimizedInstances() {
    this._useEbsOptimizedInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEbsOptimizedInstancesInput() {
    return this._useEbsOptimizedInstances
  }

  // ebs_volume - computed: false, optional: true, required: false
  private _ebsVolume?: OpsworksMemcachedLayerEbsVolume[];
  public get ebsVolume() {
    return this.interpolationForAttribute('ebs_volume') as any;
  }
  public set ebsVolume(value: OpsworksMemcachedLayerEbsVolume[] ) {
    this._ebsVolume = value;
  }
  public resetEbsVolume() {
    this._ebsVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeInput() {
    return this._ebsVolume
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocated_memory: cdktf.numberToTerraform(this._allocatedMemory),
      auto_assign_elastic_ips: cdktf.booleanToTerraform(this._autoAssignElasticIps),
      auto_assign_public_ips: cdktf.booleanToTerraform(this._autoAssignPublicIps),
      auto_healing: cdktf.booleanToTerraform(this._autoHealing),
      custom_configure_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customConfigureRecipes),
      custom_deploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customDeployRecipes),
      custom_instance_profile_arn: cdktf.stringToTerraform(this._customInstanceProfileArn),
      custom_json: cdktf.stringToTerraform(this._customJson),
      custom_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._customSecurityGroupIds),
      custom_setup_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customSetupRecipes),
      custom_shutdown_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customShutdownRecipes),
      custom_undeploy_recipes: cdktf.listMapper(cdktf.stringToTerraform)(this._customUndeployRecipes),
      drain_elb_on_shutdown: cdktf.booleanToTerraform(this._drainElbOnShutdown),
      elastic_load_balancer: cdktf.stringToTerraform(this._elasticLoadBalancer),
      install_updates_on_boot: cdktf.booleanToTerraform(this._installUpdatesOnBoot),
      instance_shutdown_timeout: cdktf.numberToTerraform(this._instanceShutdownTimeout),
      name: cdktf.stringToTerraform(this._name),
      stack_id: cdktf.stringToTerraform(this._stackId),
      system_packages: cdktf.listMapper(cdktf.stringToTerraform)(this._systemPackages),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      use_ebs_optimized_instances: cdktf.booleanToTerraform(this._useEbsOptimizedInstances),
      ebs_volume: cdktf.listMapper(opsworksMemcachedLayerEbsVolumeToTerraform)(this._ebsVolume),
    };
  }
}