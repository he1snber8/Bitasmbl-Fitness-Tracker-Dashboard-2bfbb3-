import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
const api = String.fromEnvironment('API_URL', defaultValue: 'http://10.0.2.2:4000/api');
class DashboardScreen extends StatefulWidget {
  const DashboardScreen({super.key});
  @override
  State<DashboardScreen> createState() => _DashboardScreenState();
}
class _DashboardScreenState extends State<DashboardScreen> {
  List workouts = [];
  @override
  void initState() {
    super.initState();
    _load();
  }
  Future<void> _load() async {
    final res = await http.get(Uri.parse('$api/workouts'));
    setState(() => workouts = json.decode(res.body));
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Fitness Dashboard')),
      body: ListView(
        children: workouts
            .map((w) => ListTile(title: Text(w['type']), subtitle: Text('${w['date']} - ${w['duration']} min')))
            .toList(),
      ),
    );
  }
}