"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const provider_aws_1 = require("@cdktf/provider-aws");
const helper_1 = require("../helper");
index_1.registerMapping("AWS::EC2::VPC", {
    resource: helper_1.createGuessingResourceMapper(provider_aws_1.Vpc),
    attributes: {
        // TODO: make attributes optional!
        Arn: (vpc) => vpc.arn,
        Ref: (vpc) => vpc.id,
    },
});
index_1.registerMapping("AWS::EC2::Subnet", {
    resource: helper_1.createGuessingResourceMapper(provider_aws_1.Subnet),
    attributes: {
        Arn: (subnet) => subnet.arn,
        Ref: (subnet) => subnet.id,
    },
});
index_1.registerMapping("AWS::EC2::Route", {
    resource: helper_1.createGuessingResourceMapper(provider_aws_1.Route),
    attributes: {
        Arn: () => {
            throw new Error("Route resource does not have an arn");
        },
        Ref: (route) => route.id,
    },
});
index_1.registerMapping("AWS::EC2::RouteTable", {
    resource: helper_1.createGuessingResourceMapper(provider_aws_1.RouteTable),
    attributes: {
        Arn: (table) => table.arn,
        Ref: (table) => table.id,
    },
});
index_1.registerMapping("AWS::EC2::SubnetRouteTableAssociation", {
    resource: helper_1.createGuessingResourceMapper(provider_aws_1.RouteTableAssociation),
    attributes: {
        Arn: () => {
            throw new Error("RouteTableAssociation resource does not have an arn");
        },
        Ref: (a) => a.id,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWMyLXZwYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVjMi12cGMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQ0FBMkM7QUFDM0Msc0RBTTZCO0FBQzdCLHNDQUF5RDtBQUV6RCx1QkFBZSxDQUFDLGVBQWUsRUFBRTtJQUMvQixRQUFRLEVBQUUscUNBQTRCLENBQUMsa0JBQUcsQ0FBQztJQUMzQyxVQUFVLEVBQUU7UUFDVixrQ0FBa0M7UUFDbEMsR0FBRyxFQUFFLENBQUMsR0FBUSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRztRQUMxQixHQUFHLEVBQUUsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0tBQzFCO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsdUJBQWUsQ0FBQyxrQkFBa0IsRUFBRTtJQUNsQyxRQUFRLEVBQUUscUNBQTRCLENBQUMscUJBQU0sQ0FBQztJQUM5QyxVQUFVLEVBQUU7UUFDVixHQUFHLEVBQUUsQ0FBQyxNQUFjLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHO1FBQ25DLEdBQUcsRUFBRSxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUU7S0FDbkM7Q0FDRixDQUFDLENBQUM7QUFFSCx1QkFBZSxDQUFDLGlCQUFpQixFQUFFO0lBQ2pDLFFBQVEsRUFBRSxxQ0FBNEIsQ0FBQyxvQkFBSyxDQUFDO0lBQzdDLFVBQVUsRUFBRTtRQUNWLEdBQUcsRUFBRSxHQUFHLEVBQUU7WUFDUixNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUNELEdBQUcsRUFBRSxDQUFDLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUU7S0FDaEM7Q0FDRixDQUFDLENBQUM7QUFFSCx1QkFBZSxDQUFDLHNCQUFzQixFQUFFO0lBQ3RDLFFBQVEsRUFBRSxxQ0FBNEIsQ0FBQyx5QkFBVSxDQUFDO0lBQ2xELFVBQVUsRUFBRTtRQUNWLEdBQUcsRUFBRSxDQUFDLEtBQWlCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHO1FBQ3JDLEdBQUcsRUFBRSxDQUFDLEtBQWlCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO0tBQ3JDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsdUJBQWUsQ0FBQyx1Q0FBdUMsRUFBRTtJQUN2RCxRQUFRLEVBQUUscUNBQTRCLENBQUMsb0NBQXFCLENBQUM7SUFDN0QsVUFBVSxFQUFFO1FBQ1YsR0FBRyxFQUFFLEdBQUcsRUFBRTtZQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBQ0QsR0FBRyxFQUFFLENBQUMsQ0FBd0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7S0FDeEM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3Rlck1hcHBpbmcgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7XG4gIFZwYyxcbiAgU3VibmV0LFxuICBSb3V0ZVRhYmxlLFxuICBSb3V0ZVRhYmxlQXNzb2NpYXRpb24sXG4gIFJvdXRlLFxufSBmcm9tIFwiQGNka3RmL3Byb3ZpZGVyLWF3c1wiO1xuaW1wb3J0IHsgY3JlYXRlR3Vlc3NpbmdSZXNvdXJjZU1hcHBlciB9IGZyb20gXCIuLi9oZWxwZXJcIjtcblxucmVnaXN0ZXJNYXBwaW5nKFwiQVdTOjpFQzI6OlZQQ1wiLCB7XG4gIHJlc291cmNlOiBjcmVhdGVHdWVzc2luZ1Jlc291cmNlTWFwcGVyKFZwYyksXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICAvLyBUT0RPOiBtYWtlIGF0dHJpYnV0ZXMgb3B0aW9uYWwhXG4gICAgQXJuOiAodnBjOiBWcGMpID0+IHZwYy5hcm4sXG4gICAgUmVmOiAodnBjOiBWcGMpID0+IHZwYy5pZCxcbiAgfSxcbn0pO1xuXG5yZWdpc3Rlck1hcHBpbmcoXCJBV1M6OkVDMjo6U3VibmV0XCIsIHtcbiAgcmVzb3VyY2U6IGNyZWF0ZUd1ZXNzaW5nUmVzb3VyY2VNYXBwZXIoU3VibmV0KSxcbiAgYXR0cmlidXRlczoge1xuICAgIEFybjogKHN1Ym5ldDogU3VibmV0KSA9PiBzdWJuZXQuYXJuLFxuICAgIFJlZjogKHN1Ym5ldDogU3VibmV0KSA9PiBzdWJuZXQuaWQsXG4gIH0sXG59KTtcblxucmVnaXN0ZXJNYXBwaW5nKFwiQVdTOjpFQzI6OlJvdXRlXCIsIHtcbiAgcmVzb3VyY2U6IGNyZWF0ZUd1ZXNzaW5nUmVzb3VyY2VNYXBwZXIoUm91dGUpLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgQXJuOiAoKSA9PiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSb3V0ZSByZXNvdXJjZSBkb2VzIG5vdCBoYXZlIGFuIGFyblwiKTtcbiAgICB9LFxuICAgIFJlZjogKHJvdXRlOiBSb3V0ZSkgPT4gcm91dGUuaWQsXG4gIH0sXG59KTtcblxucmVnaXN0ZXJNYXBwaW5nKFwiQVdTOjpFQzI6OlJvdXRlVGFibGVcIiwge1xuICByZXNvdXJjZTogY3JlYXRlR3Vlc3NpbmdSZXNvdXJjZU1hcHBlcihSb3V0ZVRhYmxlKSxcbiAgYXR0cmlidXRlczoge1xuICAgIEFybjogKHRhYmxlOiBSb3V0ZVRhYmxlKSA9PiB0YWJsZS5hcm4sXG4gICAgUmVmOiAodGFibGU6IFJvdXRlVGFibGUpID0+IHRhYmxlLmlkLFxuICB9LFxufSk7XG5cbnJlZ2lzdGVyTWFwcGluZyhcIkFXUzo6RUMyOjpTdWJuZXRSb3V0ZVRhYmxlQXNzb2NpYXRpb25cIiwge1xuICByZXNvdXJjZTogY3JlYXRlR3Vlc3NpbmdSZXNvdXJjZU1hcHBlcihSb3V0ZVRhYmxlQXNzb2NpYXRpb24pLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgQXJuOiAoKSA9PiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSb3V0ZVRhYmxlQXNzb2NpYXRpb24gcmVzb3VyY2UgZG9lcyBub3QgaGF2ZSBhbiBhcm5cIik7XG4gICAgfSxcbiAgICBSZWY6IChhOiBSb3V0ZVRhYmxlQXNzb2NpYXRpb24pID0+IGEuaWQsXG4gIH0sXG59KTtcbiJdfQ==