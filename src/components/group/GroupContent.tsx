import GroupActivity from "./GroupActivity";
import GroupMember from "./GroupMember";

function GroupContent({ items, isGroupTab, noItemsText }) {
  return (
    <div className="flex flex-col gap-1">
      {items.length === 0 ? (
        <div className="py-4 text-center">
          <p className="font-bold text-primary-celeste">{noItemsText}</p>
        </div>
      ) : isGroupTab ? (
        items.map((member, index) => (
          <GroupMember key={index} name={member.name} info={member.info} />
        ))
      ) : (
        items.map((activity, index) => (
          <GroupActivity
            key={index}
            date={activity.date}
            name={activity.name}
            description={activity.description}
          />
        ))
      )}
    </div>
  );
}

export default GroupContent;
