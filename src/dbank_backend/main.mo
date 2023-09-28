import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Int "mo:base/Int";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor Dbank {
  stable var currentValue : Float = 300;
  // currentValue := 300;

  stable var startTime = Time.now();

  // Debug.print(debug_show(startTime));
  let id = 47964678465;

  Debug.print(debug_show (id));
  Debug.print(debug_show (currentValue));

  public func topUp(amount : Float) {
    currentValue += amount;
    Debug.print(debug_show (currentValue));
  };

  public func withdraw(amount : Float) {
    let temp : Float = currentValue - amount;
    if (temp >= 0) {
      currentValue -= amount;
      Debug.print(debug_show (currentValue));
    } else {
      Debug.print("Net Amount cannot be negative!");
    };
  };

  public query func checkBalance() : async Float {
    return currentValue;
  };

  public func compund() {
    let currentTime = Time.now();
    let timeElapsedinNS = currentTime - startTime;
    let timeElapsedinS = timeElapsedinNS / 1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedinS));
    startTime := currentTime;
  };
  // topUp();

};
