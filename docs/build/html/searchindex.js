Search.setIndex({docnames:["homura","homura.metrics","homura.modules","homura.modules.functions","homura.utils","homura.vision","homura.vision.data","homura.vision.models","homura.vision.models.cifar","homura.vision.models.segmentation","homura.vision.transforms","index","modules"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["homura.rst","homura.metrics.rst","homura.modules.rst","homura.modules.functions.rst","homura.utils.rst","homura.vision.rst","homura.vision.data.rst","homura.vision.models.rst","homura.vision.models.cifar.rst","homura.vision.models.segmentation.rst","homura.vision.transforms.rst","index.rst","modules.rst"],objects:{"":{homura:[0,0,0,"-"]},"homura.debug":{module_debugger:[0,1,1,""]},"homura.liblog":{disable_default_handler:[0,1,1,""],enable_default_handler:[0,1,1,""],get_logger:[0,1,1,""],get_verb_level:[0,1,1,""],set_file_handler:[0,1,1,""],set_verb_level:[0,1,1,""]},"homura.lr_scheduler":{CosineAnnealingLR:[0,2,1,""],ExponentialLR:[0,2,1,""],LRScheduler:[0,2,1,""],LambdaLR:[0,2,1,""],MultiStepLR:[0,2,1,""],ReduceLROnPlateau:[0,2,1,""],StepLR:[0,2,1,""]},"homura.lr_scheduler.LRScheduler":{scheduler:[0,3,1,""],set_optimizer:[0,4,1,""]},"homura.metrics":{commons:[1,0,0,"-"]},"homura.metrics.commons":{classwise_accuracy:[1,1,1,""],confusion_matrix:[1,1,1,""],f1_score:[1,1,1,""],false_negative:[1,1,1,""],false_positive:[1,1,1,""],precision:[1,1,1,""],recall:[1,1,1,""],specificity:[1,1,1,""],true_negative:[1,1,1,""],true_positive:[1,1,1,""]},"homura.modules":{attention:[2,0,0,"-"],conditional_batchnorm:[2,0,0,"-"],functions:[3,0,0,"-"]},"homura.modules.attention":{KeyValAttention:[2,2,1,""]},"homura.modules.attention.KeyValAttention":{forward:[2,4,1,""]},"homura.modules.conditional_batchnorm":{CategoricalConditionalBatchNorm:[2,2,1,""]},"homura.modules.conditional_batchnorm.CategoricalConditionalBatchNorm":{forward:[2,4,1,""]},"homura.modules.functions":{discretization:[3,0,0,"-"],miscs:[3,0,0,"-"]},"homura.modules.functions.discretization":{gumbel_sigmoid:[3,1,1,""],gumbel_softmax:[3,1,1,""],semantic_hashing:[3,1,1,""],straight_through_estimator:[3,1,1,""]},"homura.modules.functions.miscs":{straight_backprop:[3,1,1,""]},"homura.optim":{ASGD:[0,2,1,""],Adam:[0,2,1,""],Optimizer:[0,2,1,""],RMSProp:[0,2,1,""],SGD:[0,2,1,""]},"homura.optim.Optimizer":{optim:[0,3,1,""],set_model:[0,4,1,""]},"homura.utils":{callbacks:[4,0,0,"-"],containers:[4,0,0,"-"],exceptions:[4,0,0,"-"],inferencer:[4,0,0,"-"],reporters:[4,0,0,"-"],runner:[4,0,0,"-"],trainers:[4,0,0,"-"]},"homura.utils.callbacks":{AccuracyCallback:[4,2,1,""],Callback:[4,2,1,""],CallbackList:[4,2,1,""],LossCallback:[4,2,1,""],MetricCallback:[4,2,1,""],WeightSave:[4,2,1,""]},"homura.utils.callbacks.AccuracyCallback":{accuracy:[4,4,1,""]},"homura.utils.callbacks.Callback":{after_all:[4,4,1,""],after_epoch:[4,4,1,""],after_iteration:[4,4,1,""],before_all:[4,4,1,""],before_epoch:[4,4,1,""],before_iteration:[4,4,1,""],close:[4,4,1,""]},"homura.utils.callbacks.CallbackList":{after_all:[4,4,1,""],after_epoch:[4,4,1,""],after_iteration:[4,4,1,""],before_epoch:[4,4,1,""],before_iteration:[4,4,1,""],close:[4,4,1,""]},"homura.utils.callbacks.MetricCallback":{after_epoch:[4,4,1,""],after_iteration:[4,4,1,""],before_epoch:[4,4,1,""],before_iteration:[4,4,1,""],history:[4,3,1,""]},"homura.utils.callbacks.WeightSave":{after_epoch:[4,4,1,""]},"homura.utils.containers":{Map:[4,2,1,""],TensorTuple:[4,2,1,""]},"homura.utils.containers.Map":{copy:[4,4,1,""],deepcopy:[4,4,1,""],keys:[4,4,1,""],to:[4,4,1,""],values:[4,4,1,""]},"homura.utils.containers.TensorTuple":{to:[4,4,1,""]},"homura.utils.exceptions":{ShapeError:[4,5,1,""]},"homura.utils.inferencer":{Inferencer:[4,2,1,""]},"homura.utils.inferencer.Inferencer":{iteration:[4,4,1,""],load:[4,4,1,""],mode:[4,3,1,""],override_iteration:[4,4,1,""],run:[4,4,1,""],test:[4,4,1,""],update_loss_f:[4,4,1,""]},"homura.utils.reporters":{LoggerReporter:[4,2,1,""],Reporter:[4,2,1,""],TQDMReporter:[4,2,1,""],TensorboardReporter:[4,2,1,""],VisdomReporter:[4,2,1,""]},"homura.utils.reporters.Reporter":{add_memo:[4,4,1,""],after_all:[4,4,1,""],after_epoch:[4,4,1,""],after_iteration:[4,4,1,""],before_all:[4,4,1,""],before_epoch:[4,4,1,""],before_iteration:[4,4,1,""],close:[4,4,1,""],disable_report_images:[4,4,1,""],disable_report_params:[4,4,1,""],enable_report_images:[4,4,1,""],enable_report_params:[4,4,1,""]},"homura.utils.runner":{Runner:[4,2,1,""]},"homura.utils.trainers":{DistributedSupervisedTrainer:[4,2,1,""],SupervisedTrainer:[4,2,1,""],Trainer:[4,3,1,""],TrainerBase:[4,2,1,""]},"homura.utils.trainers.SupervisedTrainer":{iteration:[4,4,1,""]},"homura.utils.trainers.TrainerBase":{is_train:[4,3,1,""],iteration:[4,4,1,""],override_iteration:[4,4,1,""],register_after_all:[4,4,1,""],register_after_epoch:[4,4,1,""],register_after_iteration:[4,4,1,""],register_before_all:[4,4,1,""],register_before_epoch:[4,4,1,""],register_before_iteration:[4,4,1,""],resume:[4,4,1,""],run:[4,4,1,""],test:[4,4,1,""],train:[4,4,1,""]},"homura.vision":{data:[6,0,0,"-"],models:[7,0,0,"-"],transforms:[10,0,0,"-"]},"homura.vision.data":{folder:[6,0,0,"-"],loaders:[6,0,0,"-"],statistics:[6,0,0,"-"]},"homura.vision.data.folder":{ImageFolder:[6,2,1,""],LabelCorruptedImages:[6,2,1,""],find_classes:[6,1,1,""],has_allowed_extension:[6,1,1,""],make_dataset:[6,1,1,""]},"homura.vision.data.folder.ImageFolder":{IMG_EXTENSIONS:[6,3,1,""]},"homura.vision.data.folder.LabelCorruptedImages":{valset:[6,4,1,""]},"homura.vision.data.loaders":{cifar100_loaders:[6,1,1,""],cifar10_loaders:[6,1,1,""],imagenet_loaders:[6,1,1,""],mnist_loaders:[6,1,1,""]},"homura.vision.data.statistics":{PerChannelStatistics:[6,2,1,""]},"homura.vision.data.statistics.PerChannelStatistics":{estimated:[6,3,1,""],from_batch:[6,4,1,""],from_directory:[6,4,1,""],mean:[6,3,1,""],stdev:[6,3,1,""]},"homura.vision.models":{cifar:[8,0,0,"-"],segmentation:[9,0,0,"-"]},"homura.vision.models.cifar":{densenet:[8,0,0,"-"],resnet:[8,0,0,"-"],wide_resnet:[8,0,0,"-"]},"homura.vision.models.cifar.densenet":{CIFARDenseNet:[8,2,1,""],cifar_densenet100:[8,1,1,""]},"homura.vision.models.cifar.densenet.CIFARDenseNet":{forward:[8,4,1,""],initialize:[8,4,1,""]},"homura.vision.models.cifar.resnet":{PreActResNet:[8,2,1,""],ResNet:[8,2,1,""],preact_resnet110:[8,1,1,""],preact_resnet20:[8,1,1,""],preact_resnet32:[8,1,1,""],preact_resnet56:[8,1,1,""],resnet110:[8,1,1,""],resnet20:[8,1,1,""],resnet32:[8,1,1,""],resnet56:[8,1,1,""]},"homura.vision.models.cifar.resnet.PreActResNet":{forward:[8,4,1,""]},"homura.vision.models.cifar.resnet.ResNet":{forward:[8,4,1,""],initialize:[8,4,1,""]},"homura.vision.models.segmentation":{intialization:[9,0,0,"-"],msdnet:[9,0,0,"-"],unet:[9,0,0,"-"]},"homura.vision.models.segmentation.intialization":{init_parameters:[9,1,1,""]},"homura.vision.models.segmentation.msdnet":{msdnet25:[9,1,1,""],msdnet50:[9,1,1,""]},"homura.vision.models.segmentation.unet":{CustomUNet:[9,2,1,""],unet:[9,1,1,""]},"homura.vision.models.segmentation.unet.CustomUNet":{forward:[9,4,1,""]},"homura.vision.transforms":{erase:[10,0,0,"-"]},"homura.vision.transforms.erase":{RandomErase:[10,2,1,""]},"homura.vision.transforms.erase.RandomErase":{min_ratio:[10,3,1,""]},homura:{debug:[0,0,0,"-"],environment:[0,0,0,"-"],liblog:[0,0,0,"-"],lr_scheduler:[0,0,0,"-"],metrics:[1,0,0,"-"],modules:[2,0,0,"-"],optim:[0,0,0,"-"],utils:[4,0,0,"-"],vision:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method","5":"py:exception"},terms:{"class":[0,1,2,4,6,8,9,10],"float":[1,2,3,4,6,10],"function":[0,2,4,8,9,11],"int":[0,3,4,6],"long":1,"return":[1,2,3,4],"true":[1,2,3,4],"while":[2,8,9],Use:4,_batchnorm:2,_dataset:6,_reporter_backend:4,_wrapperbas:4,abc:4,abs:2,accuraci:[1,4],accuracycallback:4,adam:[0,4],add_memo:4,addit:4,affin:2,after_al:4,after_epoch:4,after_iter:4,afterward:[2,8,9],alia:4,all:[0,2,8,9],alpha:0,although:[2,8,9],amsgrad:0,area_ratio:10,arg:4,artist:2,arxiv:2,asgd:0,aspect_ratio:10,attent:[0,11,12],backend:4,backward:0,base:[0,2,4,6,8,9,10],base_wrapp:4,batch:[2,6],batch_siz:6,batchnorm:2,before_al:4,before_epoch:4,before_iter:4,beta:0,blob:8,block:8,bmp:6,bn_size:8,bool:[2,3,4,6],bxcx:1,calcul:[0,1],call:[2,8,9],callabl:[0,4],callback:[0,11,12],callbacklist:4,can:4,care:[2,8,9],categor:2,categori:2,categoricalconditionalbatchnorm:2,center:0,cifar100:6,cifar100_load:6,cifar10:6,cifar10_load:6,cifar:[0,5,7],cifar_densenet100:8,cifardensenet:8,class_to_idx:6,classwise_accuraci:1,close:4,collect:4,com:8,common:[0,11,12],comput:[2,8,9],condit:2,conditional_batchnorm:[0,11,12],config:9,confus:1,confusion_matrix:1,connect:0,contain:[0,11,12],content:[11,12],cooldown:0,copi:4,cosineannealinglr:0,customunet:9,cxc:1,dampen:0,data:[0,4,5],data_augment:6,data_load:4,data_parallel:4,dataload:4,dataset:8,debug:[11,12],deepcopi:4,def:4,defin:[2,8,9],densenet:[0,5,7],deprec:4,devic:4,dict:[4,6],dim:[2,3],dimens:1,dis:4,disable_default_handl:0,disable_report_imag:4,disable_report_param:4,discret:[0,2,11],discrimin:4,distribut:6,distributedsupervisedtrain:4,document:11,dropout_r:8,dropout_ratio:2,duck:4,dumoulin:2,dure:4,enable_default_handl:0,enable_report_imag:4,enable_report_param:4,env:4,environ:[11,12],epoch:4,eps:[0,2],eras:[0,5],erase_prob:10,estim:[3,6],eta_min:0,everi:[2,4,8,9],except:[0,11,12],expect:1,exponentiallr:0,extens:6,f1_score:1,facebook:8,factor:0,fals:[0,1,2,3,4,6,8],false_neg:1,false_posit:1,file:6,find_class:6,folder:[0,5],force_download:6,formatt:0,former:[2,8,9],forward:[0,2,8,9],from_batch:6,from_directori:6,gamma:0,gao:8,gen:4,gener:4,get_logg:0,get_verb_level:0,github:8,given:4,growth_rat:8,gumbel:3,gumbel_sigmoid:3,gumbel_softmax:3,has_allowed_extens:6,hase:[],hash:3,histogram:4,histori:4,homura:11,hook:[2,8,9],http:[2,8],ignor:[2,8,9],imag:4,image_kei:4,imagefold:6,imagenet_load:6,img_extens:6,index:[4,11],infer:4,inferenc:[0,11,12],init_channel:8,init_method:4,init_paramet:9,initi:[8,9],input:[0,1,2,3,4,8,9],input_channel:9,instanc:[2,8,9],instead:[2,4,8,9],intial:[0,5,7],is_train:[3,4],iter:[4,6],jpeg:6,jpg:6,kaim:9,kei:[2,4],keyvalattent:2,kudlur:2,kwarg:[0,4,8],labelcorruptedimag:6,lambd:0,lambdalr:0,larg:4,last_epoch:0,latter:[2,8,9],learn:2,level:0,liblog:[11,12],librari:11,like:4,list:4,liuzhuang13:8,load:4,loader:[0,5],log:[0,4],log_fil:0,logger:4,loggerreport:4,loss:[0,4],loss_f:4,losscallback:4,lr_lambda:0,lr_schedul:[4,11,12],lrschedul:[0,4],lua:8,mai:4,make_dataset:6,map:4,mask:2,master:8,matrix:1,mean:6,memo:4,method:4,metric:[0,4,11,12],metriccallback:4,mileston:0,min:0,min_lr:0,min_ratio:10,misc:[0,2,11],mnist:6,mnist_load:6,mode:[0,4],model:[0,4,5],modifi:3,modul:[11,12],module_debugg:0,momentum:[0,2],move:4,msdnet25:9,msdnet50:9,msdnet:[0,5,7],multisteplr:0,mutablemap:4,n_size:8,name:[0,4],nccl:4,need:[2,4,8,9],neg:1,nesterov:0,network:1,new_iter:4,none:[0,2,4,6],normal:[2,9],num_class:[2,8,9],num_featur:2,num_lay:8,num_sampl:6,num_test_sampl:6,num_train_sampl:6,num_work:6,object:[0,4,6,10],on_memori:6,one:[2,8,9],optim:[4,11,12],optim_cl:0,option:[0,1,4],org:2,origin:3,output:[1,4],overrid:4,overridden:[2,8,9],override_iter:4,packag:[11,12],pad:8,page:11,paper:2,param:1,paramet:[1,2,3,4,9],part:4,pass:[2,8,9],path:[4,6],pathlib:6,patienc:0,perchannelstatist:6,perform:[2,8,9],pgm:6,png:6,posit:1,ppm:6,preact_resnet110:8,preact_resnet20:8,preact_resnet32:8,preact_resnet56:8,preactresnet:8,precis:1,propos:[2,8],provid:4,queri:2,randn:3,random_r:6,random_se:6,randomeras:10,rang:4,recal:1,recip:[2,8,9],reducelronplateau:0,reduct:8,reflect:8,regist:[2,8,9],register_after_al:4,register_after_epoch:4,register_after_iter:4,register_before_al:4,register_before_epoch:4,register_before_iter:4,rel:0,relu:3,replac:6,report:[0,11,12],report_freq:4,report_image_freq:4,report_images_freq:4,report_param_freq:4,report_params_freq:4,represent:2,research:11,resnet110:8,resnet20:8,resnet32:8,resnet56:8,resnet:[0,5,7],result:4,resum:4,rmsprop:0,root:6,run:[2,4,8,9],runner:[0,11,12],save:4,save_dir:4,save_freq:4,save_imag:4,save_image_freq:4,save_log:4,save_path:4,scale:2,schdlr_cl:0,schedul:[0,4],score:1,search:11,segment:[0,5,7],semant:3,semantic_hash:3,sequenc:6,set:4,set_file_handl:0,set_model:0,set_optim:0,set_verb_level:0,sgd:0,shallow:4,shapeerror:4,shlen:2,should:[2,8,9],sigmoid:3,silent:[2,8,9],sinc:[2,8,9],softmax:3,someth:4,sourc:[0,1,2,3,4,6,8,9,10],space:4,specif:1,statist:[0,5],stdev:6,step_siz:0,steplr:[0,4],storag:4,store:4,str:[0,4,6],straight:3,straight_backprop:3,straight_backprop_relu:3,straight_through_estim:3,style:2,subclass:[2,8,9],submodul:[5,7,11,12],subpackag:[11,12],supervisedtrain:4,t_co:4,t_max:0,take:[2,8,9],target:[0,1],temp:3,tensor:[0,1,2,3,4,6],tensorboardreport:4,tensortupl:4,test:4,test_data:4,text:4,them:[2,8,9],thi:[2,4,8,9],threshold:0,threshold_mod:0,through:3,tif:6,torch:[0,1,2,3,4,6,8,9],tqdmreport:4,track_running_stat:2,train:4,train_data:4,trainer:[0,11,12],trainerbas:4,transform:[0,5,6],true_neg:1,true_posit:1,tupl:[0,4,10],type:4,unet:[0,5,7],union:4,update_iter:4,update_loss_f:4,update_scheduler_by_epoch:4,use_apex_ddp:4,use_cuda_nonblock:4,use_cudnn_benchmark:4,use_sync_bn:4,used:[2,4],user:4,using:9,util:[0,11,12],val_siz:6,valset:6,valu:[2,4],verb:4,verbos:0,via:4,view:4,visdomreport:4,vision:[0,11,12],vt_co:4,weight_decai:0,weightsav:4,welcom:11,wide_resnet:[0,5,7],wise:1,within:[2,8,9],zero_init_residu:8},titles:["homura package","homura.metrics package","homura.modules package","homura.modules.functions package","homura.utils package","homura.vision package","homura.vision.data package","homura.vision.models package","homura.vision.models.cifar package","homura.vision.models.segmentation package","homura.vision.transforms package","Indices and tables","homura"],titleterms:{"function":3,attent:2,callback:4,cifar:8,common:1,conditional_batchnorm:2,contain:4,content:[0,1,2,3,4,5,6,7,8,9,10],data:6,debug:0,densenet:8,discret:3,environ:0,eras:10,except:4,folder:6,homura:[0,1,2,3,4,5,6,7,8,9,10,12],indic:11,inferenc:4,intial:9,liblog:0,loader:6,lr_schedul:0,metric:1,misc:3,model:[7,8,9],modul:[0,1,2,3,4,5,6,7,8,9,10],msdnet:9,optim:0,packag:[0,1,2,3,4,5,6,7,8,9,10],report:4,resnet:8,runner:4,segment:9,statist:6,submodul:[0,1,2,3,4,6,8,9,10],subpackag:[0,2,5,7],tabl:11,trainer:4,transform:10,unet:9,util:4,vision:[5,6,7,8,9,10],wide_resnet:8}})