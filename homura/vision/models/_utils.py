from torch import nn


def init_parameters(module: nn.Module):
    """initialize parameters using kaiming normal"""
    for m in module.modules():
        if isinstance(m, nn.Conv2d):
            # todo: check if fan_out is valid
            nn.init.kaiming_normal_(m.weight, mode='fan_out', nonlinearity='relu')
        elif isinstance(m, nn.BatchNorm2d):
            nn.init.constant_(m.weight, 1)
            nn.init.constant_(m.bias, 0)


def conv3x3(in_planes: int,
            out_planes: int,
            stride: int = 1,
            bias: bool = False,
            groups: int = 1
            ) -> nn.Conv2d:
    return nn.Conv2d(in_planes, out_planes, kernel_size=3, stride=stride, padding=1, bias=bias, groups=groups)


def conv1x1(in_planes: int,
            out_planes: int,
            stride=1,
            bias: bool = False
            ) -> nn.Conv2d:
    return nn.Conv2d(in_planes, out_planes, kernel_size=1, stride=stride, padding=0, bias=bias)
